-- create table for burgers
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);

-- create table for chicken
CREATE TABLE chicken_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);

-- create table for fish
CREATE TABLE fish_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);
-- create table for kids
CREATE TABLE kids_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);
-- create table for salads
CREATE TABLE salads_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);


-- create table for sides
CREATE TABLE sides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);
-- create table for desserts
CREATE TABLE desserts_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(5, 2)
);
-- create table for drinks   
CREATE TABLE drinks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(5, 2)
);

