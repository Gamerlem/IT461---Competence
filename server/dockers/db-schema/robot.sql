CREATE DATABASE robot;

USE robot;


CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY (id),
    INDEX (username)
);
INSERT INTO users (username, password) VALUES ('admin', 'admin');

CREATE TABLE robots(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    capabilities VARCHAR(1000) NOT NULL,
    created datetime NOT NULL,
    updated datetime NOT NULL,
    createdby users,
    PRIMARY KEY (id),
    INDEX (name)
);