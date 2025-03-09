
require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createPool({ 
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
}).promise(); 

console.log("✅ Connexion à la base de données réussie !");

module.exports = db; 


