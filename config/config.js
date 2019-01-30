require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "project3_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "project3_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "real-production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }

}
