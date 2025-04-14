const camisetas = {
    usuario: {
    email: "cr7fan@football.com",
      usuario: "CristianoFan",
      contraseña: "contraseña123",
      fechaNacimiento: "1990-06-15",
      nroDocumento: 12345678,
      fotoDePerfil: "images/users/CristianoFan.jpg"
    },
    productos: [
      {
        id: 1,
        imagen: "images/camiseta_barcelona.jpg",
        nombre: "Camiseta FC Barcelona 2021/22",
        descripcion: "La pasión culé se plasma en cada detalle.",
        comentarios: [
          {
            nombreUsuario: "BarcaLover",
            texto: "Una prenda que respira historia y emoción.",
            imagenDePerfil: "images/perfil_barcalover.jpg"
          }
        ]
      },
      {
        id: 2,
        imagen: "images/camiseta_real_madrid.jpg",
        nombre: "Camiseta Real Madrid 2021/22",
        descripcion: "Elegancia y fuerza, la camiseta blanca por excelencia.",
        comentarios: [
          {
            nombreUsuario: "MerengueFan",
            texto: "Sencilla pero icónica, demuestra grandeza en cada costura.",
            imagenDePerfil: "images/perfil_merenguefan.jpg"
          }
        ]
      },
      {
        id: 3,
        imagen: "images/camiseta_liverpool.jpg",
        nombre: "Camiseta Liverpool 2021/22",
        descripcion: "Roja pasión que enciende el ánimo de cada hincha.",
        comentarios: [
          {
            nombreUsuario: "KopKing",
            texto: "Diseño que inspira a luchar hasta el último minuto.",
            imagenDePerfil: "images/perfil_kopking.jpg"
          }
        ]
      },
      {
        id: 4,
        imagen: "images/camiseta_manu.jpg",
        nombre: "Camiseta Manchester United 2021/22",
        descripcion: "El espíritu del Rojo, tradición y modernidad en una misma prenda.",
        comentarios: [
          {
            nombreUsuario: "RedDevil",
            texto: "Clásica y potente, siempre una apuesta segura.",
            imagenDePerfil: "images/perfil_redevil.jpg"
          }
        ]
      },
      {
        id: 5,
        imagen: "images/camiseta_juventus.jpg",
        nombre: "Camiseta Juventus 2021/22",
        descripcion: "El rigor italiano en cada puntada, símbolo de excelencia.",
        comentarios: [
          {
            nombreUsuario: "Bianconeri",
            texto: "Una camiseta que marca historia, orgullo italiano.",
            imagenDePerfil: "images/perfil_bianconeri.jpg"
          }
        ]
      },
      {
        id: 6,
        imagen: "images/camiseta_bayern.jpg",
        nombre: "Camiseta Bayern Munich 2021/22",
        descripcion: "Poder y precisión, la fuerza del fútbol bávaro.",
        comentarios: [
          {
            nombreUsuario: "BayernFan",
            texto: "Sólida, con un diseño que transmite tradición ganadora.",
            imagenDePerfil: "images/perfil_bayernfan.jpg"
          }
        ]
      },
      {
        id: 7,
        imagen: "images/camiseta_psg.jpg",
        nombre: "Camiseta Paris Saint-Germain 2021/22",
        descripcion: "Estilo y glamour parisino, una prenda para los amantes del fútbol y la moda.",
        comentarios: [
          {
            nombreUsuario: "PSGForever",
            texto: "Moderna y vibrante, captura la esencia del estilo francés.",
            imagenDePerfil: "images/perfil_psgforever.jpg"
          }
        ]
      },
      {
        id: 8,
        imagen: "images/camiseta_lazio.jpg",
        nombre: "Camiseta Lazio 2021/22",
        descripcion: "El orgullo romano, con un diseño clásico y renovado.",
        comentarios: [
          {
            nombreUsuario: "Aquilotti",
            texto: "Pasión y tradición se unen en esta camiseta única.",
            imagenDePerfil: "images/perfil_aquilotti.jpg"
          }
        ]
      },
      {
        id: 9,
        imagen: "images/camiseta_atletico.jpg",
        nombre: "Camiseta Atlético de Madrid 2021/22",
        descripcion: "Garra y determinación en cada fibra del tejido.",
        comentarios: [
          {
            nombreUsuario: "AtletiFan",
            texto: "Refleja la esencia del equipo, un símbolo de lucha constante.",
            imagenDePerfil: "images/perfil_atletifan.jpg"
          }
        ]
      },
      {
        id: 10,
        imagen: "images/camiseta_inter.jpg",
        nombre: "Camiseta Inter de Milan 2021/22",
        descripcion: "El equilibrio perfecto entre tradición y modernidad, una pieza icónica.",
        comentarios: [
          {
            nombreUsuario: "Nerazzurri",
            texto: "Una camiseta que rezuma orgullo y legado milanés.",
            imagenDePerfil: "images/perfil_nerazzurri.jpg"
          }
        ]
      }
    ],
    filtrarUsuario: function () {
      // Retorna datos filtrados del usuario
      return {
        email: this.usuario.email,
        usuario: this.usuario.usuario,
        fotoDePerfil: this.usuario.fotoDePerfil
      };
    },
    filtrarComentarios: function () {
      // Recorre los productos y extrae arrays de nombres, textos e imágenes de perfil de los comentarios
      let comentariosNombre = [];
      let comentariosTexto = [];
      let comentariosImg = [];
  
      for (let i = 0; i < this.productos.length; i++) {
        let producto = this.productos[i];
        for (let j = 0; j < producto.comentarios.length; j++) {
          let comentario = producto.comentarios[j];
          comentariosNombre.push(comentario.nombreUsuario);
          comentariosTexto.push(comentario.texto);
          comentariosImg.push(comentario.imagenDePerfil);
        }
      }
      return {
        comentariosNombre,
        comentariosTexto,
        comentariosImg
      };
    },
    filtrarDescripcion: function () {
      // Recorre los productos y guarda todas sus descripciones en un array
      let desc = [];
      for (let i = 0; i < this.productos.length; i++) {
        desc.push(this.productos[i].descripcion);
      }
      return { desc };
    }
  };
  
  module.exports = camisetas;
  