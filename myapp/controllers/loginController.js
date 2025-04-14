const { login } = require("./mercadoControllers");

const loginController = {

    login: function(req, res){
        res.render(`login`)
    }
}
module.exports= loginController;