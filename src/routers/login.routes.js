const express = require('express');
const uuid = require('uuid');
const { createLogin } = require('../schemas/validations');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error, value } = createLogin.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message;
    console.log(errorMessage);
    return res.status(400).json({ message: errorMessage });
  }

  const token = uuid.v4().slice(0, 16);
  res.status(200).json({ token });
});

module.exports = router;