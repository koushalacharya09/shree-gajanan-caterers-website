import gallery from "@/data/gallery.json";

export type GalleryPhoto = {
  id: string;
  file: string;
  width: number;
  height: number;
  alt: string;
  category: string;
  score: number;
  night: boolean;
  src: { avif: Record<string, string>; webp: Record<string, string> };
  srcWebp: string;
  blurDataURL: string;
  hero: boolean;
};

export const photos = gallery.photos as unknown as GalleryPhoto[];

export function photoSrc(photo: GalleryPhoto, preferred = 1280) {
  const webp = photo.src.webp;
  const keys = Object.keys(webp)
    .map(Number)
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);
  const match = keys.find((k) => k >= preferred) ?? keys[keys.length - 1];
  return (match ? webp[String(match)] : photo.srcWebp) || photo.srcWebp;
}

export function heroPhotos() {
  const byId = new Set(gallery.heroIds);
  const listed = photos.filter((p) => byId.has(p.id));
  return listed.length ? listed : photos.slice(0, 8);
}

export function photosByCategory(cat: string) {
  if (cat === "all") return photos;
  return photos.filter((p) => p.category === cat);
}

export function marqueePhotos() {
  return [...photos].sort((a, b) => b.score - a.score).slice(0, 24);
}
