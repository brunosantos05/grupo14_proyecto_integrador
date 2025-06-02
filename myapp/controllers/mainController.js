const { Association, where } = require("sequelize");
const db = require('../database/models');
const op = db.Sequelize.Op;
const Product = db.Product;


const mainController = {
  index: function (req, res) {
    db.Producto.findAll({
      include: [
        { association: "user" },
        { association: "comentarios"},
  ]
  })
  .then(function (data) {
        console.log(data);
        return res.render("index", { productos: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};


module.exports = mainController;

