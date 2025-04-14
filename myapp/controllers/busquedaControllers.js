const busquedaControllers =  {
  busqueda: function(req, res) {
    const requerimiento = req.query.search;
    
    const resultados = [

        { nombreCamiseta: "Camiseta 1", description: "Descripción del producto 1" },
        { nombreCamiseta: "Camiseta 2", description: "Descripción del producto 2" },
        { nombreCamiseta: "Camiseta 3", description: "Descripción del producto 3" }
    ];

    res.render('resultados', { resultados, requerimiento});
  }
};

module.exports = busquedaControllers;