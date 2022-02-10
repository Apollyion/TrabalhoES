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
  user_id uuid NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

-- deliveries
CREATE TABLE deliveries(
  id uuid DEFAULT uuid_generate_v4(),
  item_name VARCHAR NOT NULL,
  description VARCHAR,
  street VARCHAR, -- rua
  district VARCHAR, -- bairro
  number INTEGER, -- numero
  city VARCHAR, -- cidade
  state VARCHAR, -- estado
  complement VARCHAR, --complemento
  status VARCHAR DEFAULT 'PENDING',
  delivered_by uuid,
  created_by uuid NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_delived_by FOREIGN KEY (delivered_by) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);