CREATE DATABASE graphql_v2;

CREATE TABLE authors (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name_author VARCHAR(255) NOT NULL,
    age INT NOT NULL,
);

CREATE TABLE books (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    date_release DATE NOT NULL,
    id_author int,
    CONSTRAINT fk_author FOREIGN KEY(id_author) REFERENCES authors(id),
);