require("dotenv").config({
  path: ".env",
});
const { ApolloServer } = require("apollo-server");
const moongose = require("mongoose");
const typeDefs = require("./gql/Schema");
const resolvers = require("./gql/resolver");

moongose.connect(
  process.env.BBDD,
  {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log(err);
    }
    server();
  }
);

function server() {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen(process.env.port).then(({ url, port }) => {
    console.log(url, port);
  });
}

// const server = new ApolloServer({ typeDefs, resolvers });

// //  db.authenticate();
// server.listen(process.env.port).then(({ url, port }) => {
//   console.log(url, port);
// });

// db.authenticate();
