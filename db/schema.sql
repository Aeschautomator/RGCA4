-- Create the burgers_db database --
CREATE DATABASE games_db;
USE games_db;

-- Create a burgers table with the required fields --
CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,	
  romLink VARCHAR(1000) NOT NULL,
  title VARCHAR(200) NOT NULL,
  rating VARCHAR(10),
  imageLink VARCHAR(1000) NOT NULL,
  synopsis VARCHAR(1000) NOT NULL,
  playing  BOOLEAN DEFAULT false, 
  PRIMARY KEY(id)
);