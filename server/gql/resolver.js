const {
  addActa,
  addCosmosActa,
  getCosmosActas,
} = require("../controller/actas.controller");

const resolver = {
  Query: {
    //Actas de Cabildo
    getActas: () => getCosmosActas(),
  },

  //Mutations
  Mutation: {
    addActa: (_, { input }) => addCosmosActa(input),
  },
};

module.exports = resolver;
