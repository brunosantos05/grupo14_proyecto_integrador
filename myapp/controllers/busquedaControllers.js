const { Association, where } = require("sequelize");
const db = require('../database/models');
const Op = db.Sequelize.Op;
const Product = db.Product;

const busquedaControllers = {
  busqueda: function (req, res) {
    let buscado = req.query.search;

    db.Producto.findAll({
      where: {
        [Op.or]: [
          { nombre: { [Op.like]: "%" + buscado + "%" } },
          { descripcion: { [Op.like]: "%" + buscado + "%" } }
        ]
      },
      include: [
        { association: "user" },
        { association: "comentarios" }
      ]
    })
    .then(function (data) {
      return res.render("search-results", { productos: data });
    })
    .catch(function (e) {
      console.log(e);
    });
  }
};

module.exports = busquedaControllers;
