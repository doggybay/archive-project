const { Model } = require("objection");
const knexInstance = require("../db/knex");

// let connection;
let connection;
// console.log("db-injector: outside func", connection);
export const getDatabaseConnector = () => {
  // if (cachedConnection) {
  //   console.log("Cached Connection");
  //   return cachedConnection;
  // }

  
  connection = Model.knex(knexInstance)
  console.log('db-injector: New Connection', connection)
  return connection;

  // return () => {
  //   console.log('db-injrector: ', knexInstance)
  //   // const configByEnvironment = dbConfig[process.env.NODE_ENV || "development"];
  //   // if (!configByEnvironment) {
  //   //   throw new Error(
  //   //     `Failed to get knex configuration for env:${process.env.NODE_ENV}`
  //   //   );
  //   // }

  //   Model.knex(knexInstance);
  //   connection = Model.knex();
  //   return connection;
  // }
};
