CREATE DATABASE IF NOT EXISTS productdb;

USE productdb;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  category VARCHAR(100),
  stock INT,
  imageUrl TEXT
);