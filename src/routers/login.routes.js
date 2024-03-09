const express = require('express');
const uuid = require('uuid');

const router = express.Router();

router.post('/', async (req, res) => {
  const token = uuid.v4().slice(0, 16);
  res.status(200).json({ token });
});

module.exports = router;