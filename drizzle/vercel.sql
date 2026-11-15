CREATE TABLE IF NOT EXISTS mandala_slots (
  owner TEXT NOT NULL,
  id TEXT NOT NULL,
  saved INTEGER NOT NULL DEFAULT 0,
  expires_at INTEGER NOT NULL,
  PRIMARY KEY (owner, id)
);
CREATE TABLE IF NOT EXISTS mandala_purchases (
  id TEXT PRIMARY KEY NOT NULL,
  owner TEXT NOT NULL,
  product_id TEXT NOT NULL,
  checkout_id TEXT UNIQUE,
  checkout_url TEXT,
  expires_at INTEGER NOT NULL,
  order_id TEXT UNIQUE,
  state TEXT NOT NULL CHECK (state IN ('open', 'paid', 'refunded'))
);
CREATE INDEX IF NOT EXISTS mandala_purchases_owner ON mandala_purchases (owner, state);
CREATE TABLE IF NOT EXISTS mandala_trial_jobs (
  id TEXT NOT NULL,
  owner TEXT NOT NULL,
  network TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  state TEXT NOT NULL,
  payload TEXT,
  PRIMARY KEY (owner, id)
);
CREATE INDEX IF NOT EXISTS mandala_trial_network_time ON mandala_trial_jobs (network, created_at);
CREATE INDEX IF NOT EXISTS mandala_trial_time ON mandala_trial_jobs (created_at);
