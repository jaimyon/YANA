-- Add a moderation workflow to prayer_requests.
-- New submissions arrive as 'pending' (emailed to the admin, not shown publicly)
-- until an admin approves them from /admin. Notes added directly via /admin
-- are inserted as 'approved' immediately.

ALTER TABLE prayer_requests ADD COLUMN status TEXT NOT NULL DEFAULT 'approved';

-- Backfill existing rows based on their previous is_public flag so the
-- Prayer Garden doesn't lose anything that was already live.
UPDATE prayer_requests SET status = 'approved' WHERE is_public = 1;
UPDATE prayer_requests SET status = 'pending' WHERE is_public = 0;

CREATE INDEX IF NOT EXISTS idx_prayer_status ON prayer_requests(status);
