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

CREATE TABLE containers (
  id int NOT NULL AUTO_INCREMENT,
  board_id int,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  container_id int,
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

INSERT INTO containers (board_id, name) VALUES (1, 'left container');
INSERT INTO containers (board_id, name) VALUES (1, 'middle container');
INSERT INTO containers (board_id, name) VALUES (1, 'right container');
INSERT INTO containers (board_id, name) VALUES (2, 'left container');
INSERT INTO containers (board_id, name) VALUES (2, 'middle container');
INSERT INTO containers (board_id, name) VALUES (2, 'right container');
INSERT INTO containers (board_id, name) VALUES (3, 'left container');
INSERT INTO containers (board_id, name) VALUES (3, 'middle container');
INSERT INTO containers (board_id, name) VALUES (3, 'right container');
INSERT INTO containers (board_id, name) VALUES (4, 'left container');
INSERT INTO containers (board_id, name) VALUES (4, 'middle container');
INSERT INTO containers (board_id, name) VALUES (4, 'right container');

INSERT INTO tasks (container_id, text) VALUES (1, 'kmenghini task on board 1 left');
INSERT INTO tasks (container_id, text, completed) VALUES (3, 'kmenghini completed task on board 1 right', true);
INSERT INTO tasks (container_id, text, completed) VALUES (8, 'completed task on middle kmenghini favorites board', true);
INSERT INTO tasks (container_id, text) VALUES (12, 'kaitlyn task on board 1 right');

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
*/

