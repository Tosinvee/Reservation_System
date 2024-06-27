const Joi = require("joi");

const validateReservation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    no_of_people: Joi.number().required(),
    date: Joi.date().required(),
    phonenumber: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = validateReservation;
