DROP DATABASE IF EXISTS Baseball_Stats_db;
CREATE DATABASE Baseball_Stats_db;

CREATE TABLE players (
  player_id SERIAL PRIMARY KEY,
  player_name VARCHAR(255) NOT NULL,
  team VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  Bats VARCHAR(5) NOT NULL,
  Throws VARCHAR(5) NOT NULL,
  Birthdate DATE NOT NULL
);

CREATE TABLE stats (
  player_id REFERENCES players(player_id) NOT NULL,
  player_name REFERENCES players(player_name) NOT NULL,
  team VARCHAR(255) REFERENCES players(team) NOT NULL,
  league VARCHAR(255) NOT NULL,
  games INTEGER NOT NULL,
  batting_average DECIMAL(4,3) NOT NULL,
  at_bats INTEGER NOT NULL,
  runs INTEGER NOT NULL,
  hits INTEGER NOT NULL,
  doubles INTEGER NOT NULL,
  triples INTEGER NOT NULL,
  home_runs INTEGER NOT NULL,
  runs_batted_in INTEGER NOT NULL,
  walks INTEGER NOT NULL,
  stolen_bases INTEGER NOT NULL
);