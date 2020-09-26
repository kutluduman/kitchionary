-- Drop and recreate Ingredients table

DROP TABLE IF EXISTS ingredients CASCADE;
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
