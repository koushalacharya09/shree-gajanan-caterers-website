const hits = new Map<string, { n: number; t: number }>();

export function rateLimit(key: string, limit = 8, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const row = hits.get(key);
  if (!row || now - row.t > windowMs) {
    hits.set(key, { n: 1, t: now });
    return { ok: true, remaining: limit - 1 };
  }
  if (row.n >= limit) return { ok: false, remaining: 0 };
  row.n += 1;
  return { ok: true, remaining: limit - row.n };
}
