create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  event_type text,
  event_date text,
  guests text,
  city text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
-- Writes go through the service role in the API route. No public insert policy.
