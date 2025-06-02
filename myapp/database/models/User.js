module.exports = function (sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        usuario: {
            type: DataTypes.STRING
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        fechaNacimiento: {
            type: DataTypes.DATE
        },
        numeroDocumento: {
            type: DataTypes.BIGINT
        },
        fotoPerfil: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "usuarios", 
        timestamps: false,
       
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Producto, {
            foreignKey: "usuario_id", 
            as: "productos"
        });
    };

    return User;
};
