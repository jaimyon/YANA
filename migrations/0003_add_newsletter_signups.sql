-- Newsletter / monthly booklet signups, collected from the "Sign Up For
-- Newsletter" panel inside the shared footer contact form on every page.

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  wants_newsletter INTEGER NOT NULL DEFAULT 1,
  wants_booklet INTEGER NOT NULL DEFAULT 0,
  mailing_address TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_signups(email);
