let connString = process.platform === 'win32' ? 'postgres://db_access:freedom@localhost:5433/inventory-project' : 'postgres://db_access:freedom@localhost/inventory-project'

let connectionString = 'postgres://db_access:freedom@192.168.10.121/inventory-project'
  
  module.exports = {
    development: {
        client: 'pg',
      connection: 'postgres://db_access:freedom@192.168.10.121/inventory-project',
        migrations: {
            directory: __dirname + '/server/db/migrations',
          },
        seeds: {
            directory: __dirname + '/server/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  