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
  fotoPerfil VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE productos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de comentarios 
CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  producto_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  nombreUsuario VARCHAR(255) NOT NULL,
  texto TEXT NOT NULL,
  imagenDePerfil VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_comentario_producto FOREIGN KEY (producto_id) REFERENCES productos(id),
  CONSTRAINT fk_comentario_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


INSERT INTO usuarios (usuario, email, contrasenia, fechaNacimiento, numeroDocumento, fotoPerfil) VALUES
('Valentina Gómez',  'valentina.gomez@gmail.com',     'claveSegura1', '1992-04-08', 29876543, '/images/users/valentina.jpg'),
('Martín Rodríguez',  'martin.rodriguez@hotmail.com', 'miPass2025',   '1988-11-22', 31234567, '/images/users/martin.jpg'),
('Lucía Fernández',   'lucia.fernandez@gmail.com',    'contraseña4',  '1995-07-14', 28901234, '/images/users/lucia.jpg'),
('Santiago Morales',  'santiago.morales@hotmail.com', 'seguro123',    '1990-01-30', 30567890, '/images/users/santiago.jpg'),
('Florencia Torres',  'florencia.torres@gmail.com',   'passFl0r',     '1993-09-05', 27654321, '/images/users/florencia.jpg');

INSERT INTO productos (usuario_id, imagen, nombre, descripcion) VALUES
(1, '/images/products/independiente.jpg', 'Camiseta Independiente 2021/22', 'El orgullo de Avellaneda, símbolo de historia y garra roja.'),
(2, '/images/products/celtic.jpg', 'Camiseta Celtic 2021/22', 'Verde y blanco, tradición escocesa en su máxima expresión.'),
(3, '/images/products/city.jpg', 'Camiseta Manchester City 2021/22', 'Estilo moderno y potencia inglesa, azul cielo que brilla.'),
(4, '/images/products/Boca.jpg', 'Camiseta Boca Juniors 2021/22', 'La pasión xeneize se plasma en cada detalle azul y oro.'),
(5, '/images/products/milan.jpg', 'Camiseta AC Milan 2021/22', 'Negro y rojo, pura historia y elegancia italiana.'),
(1, '/images/products/liverpool.jpg', 'Camiseta Liverpool 2021/22', 'You will never walk alone: pasión red en cada costura.'),
(3, '/images/products/psg.jpg', 'Camiseta Paris Saint-Germain 2021/22', 'Estilo y glamour parisino, fútbol de alto vuelo.'),
(2, '/images/products/lazio.jpg', 'Camiseta Lazio 2021/22', 'El orgullo romano, con un diseño clásico y renovado.'),
(4, '/images/products/real.jpg', 'Camiseta Real Madrid 2021/22', 'Elegancia y fuerza, la camiseta blanca por excelencia.'),
(5, '/images/products/inter.jpg', 'Camiseta Inter de Milan 2021/22', 'El equilibrio perfecto entre tradición y modernidad.');

INSERT INTO comentarios (producto_id, usuario_id, nombreUsuario, texto, imagenDePerfil) VALUES
(1, 3, 'Lucía Fernández', 'Una camiseta que lleva la pasión de Avellaneda en cada puntada.', '/images/users/lucia.jpg'),
(2, 1, 'Valentina Gómez', 'Los colores verdes y blancos que enamoran a Old Firm.', '/images/users/valentina.jpg'),
(3, 5, 'Florencia Torres', 'La elegancia del City reflejada en su nueva piel.', '/images/users/florencia.jpg'),
(4, 4, 'Santiago Morales', 'Azul y oro, orgullo de La Bombonera.', '/images/users/santiago.jpg'),
(5, 2, 'Martín Rodríguez', 'Historia milanista en cada franja roja y negra.', '/images/users/martin.jpg'),
(6, 1, 'Valentina Gómez', 'La hinchada red vibra con este ícono en el pecho.', '/images/users/valentina.jpg'),
(7, 3, 'Lucía Fernández', 'El esplendor parisino en azul, digno de la torre Eiffel.', '/images/users/lucia.jpg'),
(8, 2, 'Martín Rodríguez', 'El orgullo celeste y blanco de la capital romana.', '/images/users/martin.jpg'),
(9, 4, 'Santiago Morales', 'Blanco puro, símbolo de grandeza merengue.', '/images/users/santiago.jpg'),
(10,5, 'Florencia Torres', 'La pasión neroazzurra se siente en cada costura.', '/images/users/florencia.jpg');
