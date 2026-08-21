-- Apply once to an existing Forge Supabase project.
create table if not exists public.forge_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.forge_profiles enable row level security;

drop policy if exists "Users can read their own Forge profile" on public.forge_profiles;
create policy "Users can read their own Forge profile"
  on public.forge_profiles for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own Forge profile" on public.forge_profiles;
create policy "Users can insert their own Forge profile"
  on public.forge_profiles for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own Forge profile" on public.forge_profiles;
create policy "Users can update their own Forge profile"
  on public.forge_profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

alter table public.forge_user_state add column if not exists updated_at timestamptz not null default now();
