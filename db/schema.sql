-- Drops the _db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  PRIMARY KEY (id)
);
