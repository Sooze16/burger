DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (

    id int not null auto_increment,
    burger_name VARCHAR(30) not null,
    devoured boolean,
    PRIMARY KEY (id)



);
