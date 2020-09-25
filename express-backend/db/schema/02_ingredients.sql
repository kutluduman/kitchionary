-- Drop and recreate Ingredients table

DROP TABLE IF EXISTS ingredients CASCADE;
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  measurement_id INTEGER REFERENCES measurements(id),
  name VARCHAR(255) NOT NULL
);
