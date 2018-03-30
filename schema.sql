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

CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  board_id int,
  text varchar(200) NOT NULL,
  completed boolean NOT NULL default 0,
  PRIMARY KEY (id)
);

INSERT INTO users (name) VALUES ('kmenghini');
INSERT INTO users (name) VALUES ('kaitlyn');

INSERT INTO boards (user_id, name) VALUES (1, 'kmenghini board 1');
INSERT INTO boards (user_id, name) VALUES (1, 'kmenghini board 2');
INSERT INTO boards (user_id, name, is_favorite) VALUES (1, 'kmenghini favorites', true);
INSERT INTO boards (user_id, name) VALUES (2, 'kaitlyn board 1');

INSERT INTO tasks (board_id, text) VALUES (1, 'kmenghini task on board 1');
INSERT INTO tasks (board_id, text, completed) VALUES (3, 'completed task on kmenghini favorites board', true);
INSERT INTO tasks (board_id, text) VALUES (4, 'kaitlyn task on board 1');

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *
 *    mysql -u root < schema.sql
 *
*/

