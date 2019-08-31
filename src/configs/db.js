require('dotenv').config()

const mysql = require('mysql')

const conn = mysql.createConnection({
  host: process.env.DB_HOST || "https://remotemysql.com",
  user: process.env.DB_USER || "TQcD990PhV",
  password: process.env.DB_PASSWORD || "tFU1324eFE",
  database: process.env.DB_NAME || "TQcD990PhV"
})

module.exports = conn
