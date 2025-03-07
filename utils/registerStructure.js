const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.email": "Veuillez fournir un email valide.",
    "any.required": "L'email est requis."
  }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.min": "Le mot de passe doit contenir au moins 8 caractères.",
    "any.required": "Le mot de passe est requis."
  }),
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "any.required": "Le nom est requis."
  })
})
  .unknown(false)
  .messages({
    "object.unknown": "Ce champ n'est pas autorisé." // Message d'erreur pour champs inconnus
  });
module.exports = { registerSchema };
