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
  CONSTRAINT fk_usuario FOREIGN KEY (Idusuario) REFERENCES Usuarios(id)
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
  CONSTRAINT fk_comentario_producto FOREIGN KEY (Idproducto) REFERENCES Productos(id),
  CONSTRAINT fk_comentario_usuario FOREIGN KEY (Idusuario) REFERENCES Usuarios(id)
);

INSERT INTO usuarios (usuario, email, contrasenia, fecha, dni, foto_perfil) VALUES
('Valentina Gómez',  'valentina.gomez@gmail.com',     'claveSegura1', '1992-04-08', 29876543, '/images/users/valentina.jpg'),
('Martín Rodríguez',  'martin.rodriguez@hotmail.com', 'miPass2025',   '1988-11-22', 31234567, '/images/users/martin.jpg'),
('Lucía Fernández',   'lucia.fernandez@gmail.com',    'contraseña4',  '1995-07-14', 28901234, '/images/users/lucia.jpg'),
('Santiago Morales',  'santiago.morales@hotmail.com', 'seguro123',    '1990-01-30', 30567890, '/images/users/santiago.jpg'),
('Florencia Torres',  'florencia.torres@gmail.com',   'passFl0r',     '1993-09-05', 27654321, '/images/users/florencia.jpg');

INSERT INTO productos (IdUsuario, foto, nombre, descripcion) VALUES
(1, '/images/products/independiente.jpg', 'Camiseta Independiente 2021/22', 'El orgullo de Avellaneda, símbolo de historia y garra roja.'),
(2, '/images/products/celtic.jpg', 'Camiseta Celtic 2021/22', 'Verde y blanco, tradición escocesa en su máxima expresión.'),
(3, '/images/products/city.jpg', 'Camiseta Manchester City 2021/22', 'Estilo moderno y potencia inglesa, azul cielo que brilla.'),
(4, '/images/products/Boca.jpg', 'Camiseta Boca Juniors 2021/22', 'La pasión xeneize se plasma en cada detalle azul y oro.'),
(5, '/images/products/milan.jpg', 'Camiseta AC Milan 2021/22', 'Negro y rojo, pura historia y elegancia italiana.'),
(6, '/images/products/liverpool.jpg', 'Camiseta Liverpool 2021/22', 'You will never walk alone: pasión red en cada costura.'),
(7, '/images/products/psg.jpg', 'Camiseta Paris Saint-Germain 2021/22', 'Estilo y glamour parisino, fútbol de alto vuelo.'),
(8, '/images/products/lazio.jpg', 'Camiseta Lazio 2021/22', 'El orgullo romano, con un diseño clásico y renovado.'),
(9, '/images/products/real.jpg', 'Camiseta Real Madrid 2021/22', 'Elegancia y fuerza, la camiseta blanca por excelencia.'),
(9, '/images/products/inter.jpg', 'Camiseta Inter de Milan 2021/22', 'El equilibrio perfecto entre tradición y modernidad.');


INSERT INTO comentarios (Idproducto, Idusuario, texto) VALUES
(1, 3, 'Una camiseta que lleva la pasión de Avellaneda en cada puntada.'),
(2, 1, 'Los colores verdes y blancos que enamoran a Old Firm.'),
(3, 5, 'La elegancia del City reflejada en su nueva piel.'),
(4, 4, 'Azul y oro, orgullo de La Bombonera.'),
(5, 2, 'Historia milanista en cada franja roja y negra.'),
(6, 1, 'La hinchada red vibra con este ícono en el pecho.'),
(7, 3, 'El esplendor parisino en azul, digno de la torre Eiffel.'),
(8, 2, 'El orgullo celeste y blanco de la capital romana.'),
(9, 4, 'Blanco puro, símbolo de grandeza merengue.'),
(10,5, 'La pasión neroazzurra se siente en cada costura.');
