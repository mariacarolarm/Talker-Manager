const express = require('express');
const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');
const authenticateToken = require('../middlewares/tokenValidation');

const searchTalker = express.Router();
const PATH = path.join(__dirname, '../talker.json');

searchTalker.use(authenticateToken);

searchTalker.get('/', async (req, res) => {
  try {
    const talkers = await readJsonData(PATH);
    const searchTerm = req.query.q;

    if (!searchTerm || searchTerm.trim() === '') {
      return res.status(200).json(talkers);
    }

    const matchingTalkers = talkers.filter((talker) =>
      talker.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (matchingTalkers.length === 0) return res.status(200).json([]);
    res.status(200).json(matchingTalkers);
  } catch (error) {
    console.error('Error searching talkers: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = searchTalker;
