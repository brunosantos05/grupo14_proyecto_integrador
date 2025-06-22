module.exports = function(sequelize, DataTypes) {
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
    numeroDocumento: DataTypes.STRING,
    fotoPerfil: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  };

  let config = {
    tableName: "usuarios"
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.hasMany(models.Producto, {
      foreignKey: "usuario_id",
      as: "productos"
    });
  };

  return User;
};
