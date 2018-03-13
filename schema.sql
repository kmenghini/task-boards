DROP DATABASE IF EXISTS task_boards;

CREATE DATABASE task_boards;

USE task_boards;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE boards (
  id int NOT NULL AUTO_INCREMENT,
  user_id int,
  name varchar(50) NOT NULL,
  is_favorite boolean NOT NULL default 0,
  PRIMARY KEY (id)
);

CREATE TABLE notes (
  id int NOT NULL AUTO_INCREMENT,
  board_id int,
  text varchar(200) NOT NULL,
  completed boolean NOT NULL default 0,
  PRIMARY KEY (id)
)




/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *
 *    mysql -u root < schema.sql
 *
*/

