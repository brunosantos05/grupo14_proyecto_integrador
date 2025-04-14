const express=require(`express`)
const camisetas=require(`../db`)

const productAddController = {
    productAdd: function(req,res){
        res.render(`product-add`)
    },
}
module.exports = productAddController;