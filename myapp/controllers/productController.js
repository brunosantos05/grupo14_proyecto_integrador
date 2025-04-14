const express=require(`express`)
const camisetas=require(`../db`)

const productAddController = { 
    product:function(req,res){
        res.render(`product`)
    },
}

module.exports= productController;