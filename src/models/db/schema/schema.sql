DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS todos CASCADE;
DROP TABLE IF EXISTS users_todos CASCADE;
DROP TABLE IF EXISTS completed_todos CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  encrypted_password VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  item VARCHAR(255) NOT NULL
);

CREATE TABLE users_todos (
  user_id INTEGER REFERENCES users(id),
  todo_item INTEGER REFERENCES todos(id)
);

CREATE TABLE completed_todos (
  user_id INTEGER REFERENCES users(id),
  item_id INTEGER REFERENCES todos(id)
);
