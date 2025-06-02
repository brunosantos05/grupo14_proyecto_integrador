module.exports = (sequelize, DataTypes) => {
  let alias = "Producto";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  };

  let config = {
    tableName: "productos"
  };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models) {
    Producto.belongsTo(models.User, {
      foreignKey: "usuario_id",
      as: "user"
    });

    Producto.hasMany(models.Comentario, {
      foreignKey: "producto_id",
      as: "comentarios"
    });
  };

  return Producto;
};
