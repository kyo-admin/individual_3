-- archivo.sql

-- Conectarse a PostgreSQL
\c postgres

-- Crear la base de datos "db"
CREATE DATABASE db;

-- Conectarse a la base de datos "db"
\c db

-- Crear el usuario "user_db" con la contraseña "123456"
CREATE USER user_db WITH PASSWORD '123456';

-- Otorgar todos los permisos al usuario "user_db" sobre la base de datos "db"
GRANT ALL PRIVILEGES ON DATABASE db TO user_db;

-- Salir de psql
\q
