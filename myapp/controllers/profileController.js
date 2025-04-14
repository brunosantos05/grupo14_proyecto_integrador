const express= require(`express`)
const camisetas= require(`../db`)

const productAddController = {
    profile: function(req,res){
        res.render(`profile`)
    },
}
module.exports= profileController;