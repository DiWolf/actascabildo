if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
   
  });
}

//variables de entorno
module.exports = {
  PORT: process.env.PORT,
  // MYSQL_USER: process.env.MYSQL_USER,
  // MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  // MYSQL_PORT: process.env.MYSQL_PORT,
  // MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  SQL_HOST: process.env.SQL_HOST,
  SQL_USER: process.env.SQL_USER,
  SQL_PASSWORD: process.env.SQL_PASSWORD,
  SQL_PORT: process.env.SQL_PORT,
  SQL_DATABASE: process.env.SQL_DATABASE,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  CACHE_KEY: process.env.CACHE_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
};
