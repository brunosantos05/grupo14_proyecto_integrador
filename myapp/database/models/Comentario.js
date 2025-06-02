module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        nombreUsuario: {
            type: dataTypes.STRING
        },
        texto: {
            type: dataTypes.TEXT
        },
        imagenDePerfil: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            foreignKey: "producto_id",
            as: "producto"
        });

        Comentario.belongsTo(models.User, {
            foreignKey: "usuario_id",
            as: "user"
        });
    };

    return Comentario;
};
