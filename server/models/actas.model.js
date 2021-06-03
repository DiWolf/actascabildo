const { Model, DataTypes } = require("sequelize");
const { db } = require("../config/Conexion");

class Actas extends Model {}

Actas.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    folio: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      unique: true,
    },
    tipo: {
      type: DataTypes.CHAR(30),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE
    },
    registroSistema: {
      type: DataTypes.DATE,
      defaultValue: Date.now()
    }
  },
  {
    sequelize: db,
    schema: "actcabildo",
    modelName: "actas",
    tableName: "actas",
    timestamps: false,
  }
);

module.exports = { Actas };
