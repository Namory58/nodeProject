const jwt = require("jsonwebtoken");
require("dotenv").config(); //récupératiuon des variables d'environnement 
const secretKey =process.env.JWT_SECRET_KEY;

module.exports = {
    createToken: function (user) {
        const payload ={idUser : user.id};
        const token = jwt.sign(payload,secretKey, {expiresIn: '1h',});
        console.log(token);
    },

    verifyToken: function (token) {
        // Retourne un boulean ture ou false 
       return emailRegex.test(email); 
    }
};