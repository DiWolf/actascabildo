const { db } = require("../config/Conexion");
const { Actas } = require("../models/actas.model");
const ActasCosmos = require("../models/nosql/actas.model");
//Funcion parar crear un acta de cabildo
async function addActa(input) {
  try {
    return await Actas.create(input)
      .then((_) => {
        return "Acta creada exitosamente";
      })
      .catch((err) => {
        return err;
      });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

//Funcion para crear un acta (Azure Cosmos)
async function addCosmosActa(input) {
  try {
    return await ActasCosmos.create(input)
      .then((_) => {
        return "Acta creada exitosamente";
      })
      .catch((err) => {
        return err;
      });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

//Función para obtener las actas (Azure Cosmos)
async function getCosmosActas() {
  try {
    return await ActasCosmos.find({}).then((r) => {
      return r;
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = { addActa, addCosmosActa, getCosmosActas };
