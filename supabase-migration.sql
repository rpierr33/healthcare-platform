-- Mindcare of America - Database Migration
-- Run this in the Supabase SQL Editor

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  dob date,
  preferred_contact text,
  conditions text[],
  insurance text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  dob date,
  preferred_contact text,
  conditions text[],
  insurance text,
  message text,
  preferred_date date,
  preferred_time text,
  visit_type text,
  status text default 'new',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table leads enable row level security;
alter table appointments enable row level security;

-- RLS Policies: Only authenticated admin users can read/write
create policy "Admin read leads" on leads for select to authenticated using (true);
create policy "Admin insert leads" on leads for insert with check (true);
create policy "Admin update leads" on leads for update to authenticated using (true);

create policy "Admin read appointments" on appointments for select to authenticated using (true);
create policy "Admin insert appointments" on appointments for insert with check (true);
create policy "Admin update appointments" on appointments for update to authenticated using (true);
