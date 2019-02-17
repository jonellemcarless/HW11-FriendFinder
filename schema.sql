DROP DATABASE IF EXISTS friendfinderdb;

CREATE DATABASE friendfinderdb;

USE friendfinderdb;

CREATE TABLE friends (
ID INT NOT NULL AUTO_INCREMENT,
Name VARCHAR(50) NULL,
Photo VARCHAR(100) NULL,
Answer1 INT NULL,
Answer2 INT NULL,
Answer3 INT NULL,
Answer4 INT NULL,
Answer5 INT NULL,
Answer6 INT NULL,
Answer7 INT NULL,
Answer8 INT NULL,
Answer9 INT NULL,
Answer10 INT NULL,
  PRIMARY KEY (ID)
);

-- INSERT INTO friendfinderdb WHERE (ID, Name, Photo, Answer)

-- USE friendfinderdb;

-- INSERT INTO friends (ID, Name, Photo, Answer1, Answer2, Answer3, Answer4, Answer5, Answer6, Answer7, Answer8, Answer9, Answer10) VALUES (01, 'test', 'https://www.fkbga.com/wp-content/uploads/2018/07/person-icon-6.png', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);