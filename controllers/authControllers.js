var emailService = require("../services/emailService");
var usesModels = require("../models/users");
const bcrypt = require("bcrypt");
const registerDataStructure  = require("../utils/registerStructure");


module.exports = {
  login: async function(req, res) {
    return res.status(200).json({ message: "login" });
  },
  register: async function(req, res) {
    const { error } = registerDataStructure.registerSchema.validate(req.body);
    if (error) {
      if (error.details[0].type === "object.unknown") {
        return res.status(400).json({
          error: true,
          message: `Le champ '${error.details[0].context.key}' n'est pas autorisé dans la requête.`
        });
      }else{
        return res.status(400).json({
          error: true,
          message: error.details[0].message // Message d'erreur personnalisé
        });
      }
    }
    const { password, email, name } = req.body;

    if (!emailService.isValidEmail(email)) {
      return res.status(400).json({
        eror: true,
        message: "Email invalide."
      });
    }

    if (password.length < 8 || !emailService.isValidPassword(password)) {
      return res.status(400).json({
        eror: true,
        message: "Mot de passe invalide."
      });
    }
    try {
      const emailExiste = await usesModels.cheackEmail(email);
     
      if (emailExiste.length > 0) {
        return res.status(400).json({
          eror: true,
          message: "Adresse mail existe déjà."
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      usesModels.insertUser(name, email, hashedPassword);
      return res.status(200).json({
        eror: false,
        message: "Utilisateurs enrégister avec succès.",
        data: {
          email: email,
          name: name
        }
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur serveur lors de l'enregitrement." });
    }
  },

  forgetPassword: async function(req, res) {
    
    const email = req.body.email;

    const emailExiste = await usesModels.cheackEmail(email);
    if(emailExiste.length==0){
      return res.status(400).json({
        eror: true,
        message: "Email inconnu."
      });
    }
    console.log("email correct");



    return res.status(200).json({ message: "forgetPassword" });
  }
};
