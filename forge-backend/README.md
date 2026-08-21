# Forge backend boundary

The first backend responsibility is authenticated sync only. `supabase/schema.sql`
defines a user profile and one user-owned JSON document for onboarding state,
structured training history, active workout state, and coach memory.

The mobile app stays local-first. Each signed-in user gets a namespaced local
snapshot. On sign-in, Forge restores the newest local/cloud snapshot by
`updated_at`; local changes made while offline remain queued and retry after
the app returns to the foreground or every 30 seconds. A successful sync clears
the pending state. Sign-out keeps the user's local snapshot under that user's
key, so another account cannot read it.

Apply the SQL migration before testing cloud restore. Keep business rules in
`forge-mobile/src/domain`; the backend should validate ownership and
persistence, not duplicate progress or adaptation arithmetic.

Manual lifecycle test:

1. Create an account and complete onboarding.
2. Confirm a row exists in `forge_profiles` and `forge_user_state`.
3. Complete a workout and confirm `training_data.completedSessions` changes.
4. Turn off connectivity, complete another workout, then restore connectivity.
5. Bring Forge to the foreground and confirm the sync status/log reports a
   successful upload.
6. Sign out, sign back in, and confirm the workout history and active workout
   return.
7. Sign in on a second device and confirm the same state is restored.

For simultaneous edits on two devices, the newest snapshot timestamp wins.
