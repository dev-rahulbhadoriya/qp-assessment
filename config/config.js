require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  "development": {
    "username": "root",
    "password": "90iopklbnm",
    "database": "grocery_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "90iopklbnm",
    "database": "grocery_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
