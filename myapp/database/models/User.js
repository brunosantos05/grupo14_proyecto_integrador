module.exports = function (sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: DataTypes.STRING,
        usuario: DataTypes.STRING,
        contrasenia: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        numeroDocumento: DataTypes.BIGINT,
        fotoPerfil: DataTypes.STRING,
        createdAt: DataTypes.DATE
    };

    let config = {
        tableName: "usuarios", 
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Producto, {
            foreignKey: "usuario_id", 
            as: "productos"
        });

        User.hasMany(models.Comentario, {
            foreignKey: "usuario_id",
            as: "comentarios"
        });
    };

    return User;
};
