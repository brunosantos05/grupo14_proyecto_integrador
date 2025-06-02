module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            
        },
        imagen: {
            type: dataTypes.STRING,
            
        },
        nombre: {
            type: dataTypes.STRING,
            
        },
        descripcion: {
            type: dataTypes.STRING(400),
            
        }
    };

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.User, {
            foreignKey: "usuario_id",
            as: "user"
        });
    };

    return Producto;
};
