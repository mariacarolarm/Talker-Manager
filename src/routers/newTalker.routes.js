const express = require('express');
const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');
const { writeJsonData } = require('../utils/fs/writeJsonData');
const authenticateToken = require('../middlewares/tokenValidation');
const { createTalker } = require('../schemas/validations');

const newTalker = express.Router();
const PATH = path.join(__dirname, '../talker.json');

newTalker.use(authenticateToken);
newTalker.post('/', async (req, res) => {
  try {
    const { error } = createTalker.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    }
    const talkers = await readJsonData(PATH);

    const { name, age, talk } = req.body;
    const addTalker = { name, age, talk };
    addTalker.id = talkers.length + 1;
    talkers.push(addTalker);
    await writeJsonData(PATH, talkers);
    res.status(201).json(addTalker);
  } catch (error) {
    console.error('Error adding new talker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = newTalker;