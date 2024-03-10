const express = require('express');
const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');
const { writeJsonData } = require('../utils/fs/writeJsonData');
const authenticateToken = require('../middlewares/tokenValidation');

const deleteTalker = express.Router();
const PATH = path.join(__dirname, '../talker.json');

deleteTalker.use(authenticateToken);

deleteTalker.delete('/:id', async (req, res) => {
  try {
    const talkers = await readJsonData(PATH);
    const { id } = req.params;
    const index = talkers.findIndex((t) => t.id === Number(id));

    if (index === -1) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    talkers.splice(index, 1);
    await writeJsonData(PATH, talkers);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting talker: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = deleteTalker;