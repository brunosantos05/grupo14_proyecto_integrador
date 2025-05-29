const usuario = require("../db/users");

const addProducto = {
    addProducto: function (req, res) {
        let usuarioLogueado = usuario.usuario;
        res.render("product-add", { usuarioLogueado });
    }
};


module.exports = addProducto;