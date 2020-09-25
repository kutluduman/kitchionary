-- Drop and recreate Cultures table (Example)

DROP TABLE IF EXISTS cultures CASCADE;
CREATE TABLE cultures (
  id SERIAL PRIMARY KEY NOT NULL,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);
