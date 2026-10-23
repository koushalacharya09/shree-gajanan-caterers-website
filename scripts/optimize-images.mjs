/**
 * Image pipeline: auto-orient, resize, AVIF + WebP, blur placeholders, rank for hero.
 * Source: C:\Users\user\Downloads\catering photos
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCES = [
  path.resolve("C:/Users/user/Downloads/catering photos"),
  path.resolve("images/gallery/gmb"),
];
const OUT = path.resolve("public/gallery");
const JSON_OUT = path.resolve("src/data/gallery.json");
const WIDTHS = [640, 1280, 1920];
const MAX_BYTES = 400 * 1024;
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const LAPLACIAN = {
  width: 3,
  height: 3,
  kernel: [0, 1, 0, 1, -4, 1, 0, 1, 0],
};

function slugify(name, index) {
  const base = name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return `g${String(index).padStart(2, "0")}-${base || "photo"}`;
}

function guessCategory({ width, height, mean }) {
  const ratio = width / height;
  if (mean < 70) return ratio > 1.2 ? "weddings" : "live";
  if (ratio > 1.35) return "weddings";
  if (ratio < 0.85) return "food";
  if (mean > 150) return "sweets";
  return "live";
}

function guessAlt(id, category, night) {
  const map = {
    weddings: night
      ? "Night wedding catering setup by Shree Gajanan Caterers in Jaipur"
      : "Wedding catering setup by Shree Gajanan Caterers in Jaipur",
    live: "Live food station and buffet counter by Shree Gajanan Caterers",
    food: "Vegetarian catering dishes prepared by Shree Gajanan Caterers",
    sweets: "Festive sweets and dessert counter by Shree Gajanan Caterers",
    corporate: "Corporate and grand event catering by Shree Gajanan Caterers",
  };
  return map[category] || `Catering photography from Shree Gajanan Caterers, Jaipur (${id})`;
}

async function encodeUnderCap(pipeline, ext) {
  let quality = ext === "avif" ? 48 : 72;
  let buf;
  for (let i = 0; i < 6; i += 1) {
    const clone = pipeline.clone();
    buf =
      ext === "avif"
        ? await clone.avif({ quality, effort: 4 }).toBuffer()
        : await clone.webp({ quality }).toBuffer();
    if (buf.length <= MAX_BYTES) return buf;
    quality -= 8;
    if (quality < 28) break;
  }
  return buf;
}

async function sharpnessScore(input) {
  try {
    const stats = await sharp(input)
      .rotate()
      .greyscale()
      .resize(480, 480, { fit: "inside" })
      .convolve(LAPLACIAN)
      .stats();
    return stats.channels[0].stdev;
  } catch {
    return 0;
  }
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const files = [];
  for (const dir of SOURCES) {
    try {
      const names = await fs.readdir(dir);
      for (const n of names) {
        if (ALLOWED.has(path.extname(n).toLowerCase())) {
          files.push({ dir, name: n });
        }
      }
    } catch {
      /* optional extra folder */
    }
  }
  files.sort((a, b) => a.name.localeCompare(b.name));

  const items = [];
  let i = 0;
  for (const { dir, name } of files) {
    i += 1;
    const abs = path.join(dir, name);
    const id = slugify(name, i);
    let meta;
    try {
      meta = await sharp(abs).rotate().metadata();
    } catch (err) {
      console.warn("skip unreadable", name, err.message);
      continue;
    }
    const width = meta.width || 0;
    const height = meta.height || 0;
    if (width < 400 || height < 400) {
      console.warn("skip tiny", name, width, height);
      continue;
    }

    const oriented = sharp(abs).rotate();
    const preview = await oriented
      .clone()
      .resize(24, 24, { fit: "inside" })
      .webp({ quality: 20 })
      .toBuffer();
    const stats = await oriented.clone().stats();
    const mean = stats.channels.slice(0, 3).reduce((s, c) => s + c.mean, 0) / 3;
    const score = await sharpnessScore(abs);
    const category = guessCategory({ width, height, mean });
    const night = mean < 75;
    const alt = guessAlt(id, category, night);

    const sources = { avif: {}, webp: {} };
    const nativeW = Math.min(width, 1920);
    const widths = [...new Set([...WIDTHS, nativeW])].filter((w) => w <= nativeW + 16);
    for (const w of widths) {
      const resized = oriented.clone().resize({
        width: w,
        withoutEnlargement: true,
        fit: "inside",
      });
      const avifBuf = await encodeUnderCap(resized, "avif");
      const webpBuf = await encodeUnderCap(resized, "webp");
      const avifName = `${id}-w${w}.avif`;
      const webpName = `${id}-w${w}.webp`;
      await fs.writeFile(path.join(OUT, avifName), avifBuf);
      await fs.writeFile(path.join(OUT, webpName), webpBuf);
      sources.avif[String(w)] = `/gallery/${avifName}`;
      sources.webp[String(w)] = `/gallery/${webpName}`;
    }

    const fallbackW = Object.keys(sources.webp).pop() || "640";
    items.push({
      id,
      file: name,
      width,
      height,
      alt,
      category,
      score: Number(score.toFixed(2)),
      night,
      src: sources,
      srcWebp: sources.webp[fallbackW],
      blurDataURL: `data:image/webp;base64,${preview.toString("base64")}`,
      hero: false,
    });
    console.log(`ok ${id}  score=${score.toFixed(1)}  ${category}`);
  }

  function heroRank(p) {
    const stock = /sm\d+|er\d+/i.test(p.file) ? -35 : 0;
    const night = p.night ? 18 : 0;
    const live = p.category === "live" ? 12 : 0;
    const landscape = p.width / p.height >= 1.05 ? 8 : 0;
    const real = /gmb|wa00|videoframe|[a-f0-9]{20}/i.test(p.file + p.id) ? 20 : 0;
    return p.score + stock + night + live + landscape + real;
  }
  items.sort((a, b) => heroRank(b) - heroRank(a));
  const heroes = items.filter((p) => p.width / p.height >= 0.9).slice(0, 8).map((p) => p.id);
  items.sort((a, b) => b.score - a.score);
  for (const p of items) p.hero = heroes.includes(p.id);

  await fs.mkdir(path.dirname(JSON_OUT), { recursive: true });
  await fs.writeFile(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: items.length,
        heroIds: heroes,
        photos: items,
      },
      null,
      2,
    ),
  );
  console.log(`Wrote ${items.length} photos. Heroes: ${heroes.join(", ")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
