-- Drop and recreate Measurements table

DROP TABLE IF EXISTS measurements CASCADE;
CREATE TABLE measurements (
  id SERIAL PRIMARY KEY NOT NULL,
  ingredient_id INTEGER REFERENCES ingredients(id),
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  unit VARCHAR(255)
);
