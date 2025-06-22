const { Association, where } = require("sequelize");
const db = require('../database/models');
const op = db.Sequelize.Op;
const Product = db.Product;

const productController = {
  detalle: function (req, res) {
    let id = req.params.id;
    db.Producto.findByPk(id, {
      include: [
        { association: "user" },
        { association: "comentarios" }
      ]
    })
    .then(function (data) {
      db.Comentario.findAll({
        where: { producto_id: data.id },
        include: [
          { association: "user" }
        ]
      })
      .then(function (comentarios) {
        return res.render("product", { producto: data, comentarios: comentarios });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

module.exports = productController;
