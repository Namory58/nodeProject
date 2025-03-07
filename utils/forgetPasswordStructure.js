const Joi = require("joi");


const forgetPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.email": "Veuillez fournir un email valide.",
    "any.required": "L'email est requis."
  })
})
  .unknown(false)
  .messages({
    "object.unknown": "Ce champ n'est pas autorisé." // Message d'erreur pour champs inconnus
  });
module.exports = { forgetPasswordSchema };
