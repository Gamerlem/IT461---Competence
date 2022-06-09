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
    robotname VARCHAR(200) NOT NULL,
    capabilities VARCHAR(1000) NOT NULL,
    createdby INT,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (createdby) REFERENCES users(id),
    PRIMARY KEY (id),
    INDEX (robotname)
);