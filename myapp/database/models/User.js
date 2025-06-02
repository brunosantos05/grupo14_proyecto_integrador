module.exports = function (sequelize, dataTypes){
    let alias = "User"
    let cols = {
        id:{
            autoIncrement : true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        email: {
            type : dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
        },
        numeroDocumento: {
            type: dataTypes.BIGINT
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName : "usuarios",
        timestamps : false,
        underscored: true
    }

   let Usuario = sequelize.define(alias, cols, config);

Usuario.associate = function (models) {
    Usuario.hasMany(models.Producto, {
        foreignKey: "producto_id",
        as: "productos"
        });
    };

    return Usuario;

};