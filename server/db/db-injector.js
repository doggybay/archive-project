const { Model } = require("objection");
const knexInstance = require("../db/knex");

// let connection;
let cachedConnection;

export const getDatabaseConnector = () => {
  if (cachedConnection) {
    console.log("Cached Connection");
    return cachedConnection;
  }

  const connection = Model.knex(knexInstance);
  cachedConnection = connection;
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
