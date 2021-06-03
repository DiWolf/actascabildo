const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_HOST,
    dialect: "postgres",

    port: process.env.SQL_PORT,
  },
  console.log(process.env.SQL_HOST)
);


module.exports = { db };
