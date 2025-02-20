
require("dotenv").config();
var mysql = require("mysql2");

const db = mysql.createConnection({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});

db.connect((error)=>{
    if(error){
        console.log(err);
    }else{
        console.log("Connection reussie ! ");
    }
})

