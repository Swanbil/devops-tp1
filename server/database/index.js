const { Pool } = require('pg');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// const CONNECTION_STRING = process.env.DATABASE_URL;
const CONNECTION_STRING = "postgresql+psycopg2://postgres:vote@localhost:5432/weather-db";
const SSL = process.env.NODE_ENV === 'production';

class Database {
  constructor () {
    this._pool = new Pool({
      connectionString: CONNECTION_STRING,
      ssl: SSL
    });

    this._pool.on('error', (err, client) => {
      console.error('Unexpected error on idle PostgreSQL client.', err);
      process.exit(-1);
    });

  }

  // query method if database connect method returns no errors
  // call query method on client, pass in string query and any parameters then perform callback
  // if no errors return rows from database in callback
  query (query, ...args) {
    this._pool.connect((err, client, done) => {
      if (err) throw err;
      const params = args.length === 2 ? args[0] : [];
      const callback = args.length === 1 ? args[0] : args[1];

      client.query(query, params, (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
          return callback({ error: 'Database error.' }, null);
        }
        callback({}, res.rows);
      });
    });
  }

  end () {
    this._pool.end();
  }
}

module.exports = new Database();