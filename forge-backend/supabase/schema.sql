-- Cloud boundary for authenticated sync. The mobile app remains usable offline.
create table if not exists public.forge_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.forge_profiles enable row level security;

create policy "Users can read their own Forge profile"
  on public.forge_profiles for select
  using (auth.uid() = user_id);

create policy "Users can insert their own Forge profile"
  on public.forge_profiles for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own Forge profile"
  on public.forge_profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.forge_user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  onboarding_state jsonb not null default '{}'::jsonb,
  training_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.forge_user_state enable row level security;

create policy "Users can read their own Forge state"
  on public.forge_user_state for select
  using (auth.uid() = user_id);

create policy "Users can insert their own Forge state"
  on public.forge_user_state for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own Forge state"
  on public.forge_user_state for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
