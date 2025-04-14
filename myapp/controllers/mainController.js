const camisetas =require("../db")
const { index } = require("./mercadoControllers")

const mainController = {

    index: function(req, res){
        console.log(`prueba`)
        res.render(`index`, {title:`ML`})
    },
    search: function(req,res){
        const search=req.params.search
        res.render(`search-results`,{search})
    }
}
module.exports= mainController;