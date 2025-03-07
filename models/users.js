var db = require("../db/config");

async function insertUser(name, email, password) {
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  await db.query(sql, [name, email, password]);
}

async function cheackEmail(email) {
  const sql = "SELECT *FROM users WHERE email = ?"
  const result =  await db.query(sql, [email]);
  return  result[0] 
}



module.exports = { insertUser,cheackEmail };
