const { Association, where } = require("sequelize");
const db = require('../database/models');
const op = db.Sequelize.Op;
const Product = db.Product;


const productoController = {
  detalle: function (req,res) {
    let id = req.params.id
    db.Product.findByPK(id,{
      include: [
        { association: "user" },
        { association: "comentarios"},
      ]
    })
    .then(data => {
      db.comentarios.findAll({
        where: { producto_id: data.id},
        include: [
          { association: "user"}
        ]
      })
      .then(comentarios => {
        return res.render("product", {producto: data, comentarios: comentarios})
      })
    })
    .catch(error => {
      console.log(error);
  })
},
  };


module.exports = productoController;