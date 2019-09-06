require('dotenv').config()

const mysql = require('mysql')

// const conn = mysql.createConnection({
//   host: process.env.DB_HOST || "remotemysql.com",
//   user: process.env.DB_USER || "TQcD990PhV",
//   password: process.env.DB_PASSWORD || "tFU1324eFE",
//   database: process.env.DB_NAME || "TQcD990PhV"
// })
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
// const conn = mysql.createConnection({
//   host: "remotemysql.com",
//   user: "TQcD990PhV",
//   password: "tFU1324eFE",
//   database: "TQcD990PhV"
// })

module.exports = conn
