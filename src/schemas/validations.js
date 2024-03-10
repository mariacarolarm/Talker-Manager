const Joi = require('joi');

const createLogin = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } })
    .required()
    .messages({
      'any.required': 'O campo "email" é obrigatório',
      'string.email': 'O "email" deve ter o formato "email@email.com"',
    }),
  password: Joi.string().min(6)
    .required()
    .messages({
      'any.required': 'O campo "password" é obrigatório',
      'string.min': 'O "password" deve ter pelo menos 6 caracteres',
    }),
});

const createTalker = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'O campo "name" é obrigatório',
    'string.empty': 'O campo "name" não pode estar vazio',
    'string.min': 'O "name" deve ter pelo menos 3 caracteres',
  }),
  age: Joi.number().integer().min(18).required()
    .messages({
      'any.required': 'O campo "age" é obrigatório',
      'number.base': 'O campo "age" deve ser um número inteiro igual ou maior que 18',
      'number.integer': 'O campo "age" deve ser um número inteiro igual ou maior que 18',
      'number.min': 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    }),
  talk: Joi.object({
    watchedAt: Joi.string().regex(/^\d{2}\/\d{2}\/\d{4}$/).required().messages({
      'any.required': 'O campo "watchedAt" é obrigatório',
      'string.empty': 'O campo "watchedAt" não pode estar vazio',
      'string.pattern.base': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    }),
    rate: Joi.number().integer().min(1).max(5)
      .required()
      .messages({
        'any.required': 'O campo "rate" é obrigatório',
        'number.base': 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        'number.integer': 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        'number.min': 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        'number.max': 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      }),
  }).required().messages({
    'any.required': 'O campo "talk" é obrigatório',
  }),
});

module.exports = {
  createLogin,
  createTalker,
};