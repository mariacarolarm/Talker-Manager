const express = require('express');
const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');
const { writeJsonData } = require('../utils/fs/writeJsonData');
const authenticateToken = require('../middlewares/tokenValidation');
const { createTalker } = require('../schemas/validations');

const editTalker = express.Router();
const PATH = path.join(__dirname, '../talker.json');

editTalker.use(authenticateToken);

editTalker.put('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readJsonData(PATH);
  
  const index = talkers.findIndex((t) => t.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  const { error } = createTalker.validate(req.body);
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }

  const { name, age, talk } = req.body;
  talkers[index] = { ...talkers[index], name, age, talk };
    
  await writeJsonData(PATH, talkers);
  res.status(200).json(talkers[index]);
});

module.exports = editTalker;
