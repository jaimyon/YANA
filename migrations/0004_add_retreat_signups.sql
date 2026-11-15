-- Sign-ups collected from the dedicated Annual Ladies Retreat page
-- (/ladies-retreat). Separate from the general newsletter_signups table
-- since this tracks interest in a specific event, with its own fields.

CREATE TABLE IF NOT EXISTS retreat_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  guests INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_retreat_signups_email ON retreat_signups(email);
