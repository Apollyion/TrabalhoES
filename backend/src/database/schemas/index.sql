-- users
CREATE TABLE users(
  id uuid DEFAULT uuid_generate_v4(),
  type VARCHAR NOT NULL,
  full_name VARCHAR,
  description VARCHAR,
  document VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- adresses
CREATE TABLE adresses(
  id uuid DEFAULT uuid_generate_v4(),
  street VARCHAR, -- rua
  district VARCHAR, -- bairro
  number INTEGER, -- numero
  city VARCHAR, -- cidade
  state VARCHAR, -- estado
  user_id uuid,
  CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);