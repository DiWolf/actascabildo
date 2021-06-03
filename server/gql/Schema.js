const { gql } = require("apollo-server");

const typeDefs = gql`
  type Acta {
    id: ID
    folio: String
    tipo: TipoActa
    fecha: String
  }

  #Inputs
  input ActaInput {
    folio: String!
    tipo: TipoActa
    fecha: String
  }

  #Enumeraciones
  enum TipoActa {
    ORDINARIA
    EXTRAORDINARIA
    SOLENME
  }

  #Querys
  type Query {
    #Obtener actas de Cabildo
    getActas: [Acta]
  }

  #Mutations (guardas)
  type Mutation {
    addActa(input: ActaInput): String
  }
`;

module.exports = typeDefs;
