module.exports = function (sequelize, DataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    usuario_id: {
      type: DataTypes.INTEGER
    },
    imagen: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.TEXT    // Cambié a TEXT porque es el tipo real en la DB
    }
  };

  let config = {
    tableName: "productos",
    timestamps: false,
    underscored: true       // Correcto porque usas snake_case en la tabla
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
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
