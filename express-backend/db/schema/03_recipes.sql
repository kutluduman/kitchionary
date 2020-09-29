-- Drop and recreate Recipes table

DROP TABLE IF EXISTS recipes CASCADE;
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  directions TEXT NOT NULL,
  video_url VARCHAR(255),
  img_url VARCHAR(255),
  time INTEGER NOT NULL,
  is_gluten_free BOOLEAN NOT NULL,
  is_dairy_free BOOLEAN NOT NULL,
  is_vegan BOOLEAN NOT NULL,
  is_vegetarian BOOLEAN NOT NULL,
  is_nut_free BOOLEAN NOT NULL,
  is_salty BOOLEAN NOT NULL,
  is_greasy BOOLEAN NOT NULL,
  is_sweet BOOLEAN NOT NULL,
  is_fruity BOOLEAN NOT NULL,
  is_healthy BOOLEAN NOT NULL,
  is_spicy BOOLEAN NOT NULL,
  is_hot BOOLEAN NOT NULL,
  is_cold BOOLEAN NOT NULL,
  is_breakfast BOOLEAN NOT NULL,
  is_lunch BOOLEAN NOT NULL,
  is_appetizer BOOLEAN NOT NULL,
  is_dinner BOOLEAN NOT NULL,
  is_dessert BOOLEAN NOT NULL
);
