-- Crear base de datos
CREATE SCHEMA proyecto_integrador;

-- Usar base de datos
USE proyecto_integrador;

-- Tabla de usuarios
CREATE TABLE usuarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  contrasenia VARCHAR(255) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  numeroDocumento BIGINT NOT NULL,
  fotoPerfil VARCHAR(255)
);

-- Tabla de productos
CREATE TABLE productos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de comentarios 
CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  producto_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  nombreUsuario VARCHAR(255) NOT NULL,
  texto TEXT NOT NULL,
  imagenDePerfil VARCHAR(255),
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);