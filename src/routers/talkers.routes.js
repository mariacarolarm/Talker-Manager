const express = require('express');
const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');

const PATH = path.join(__dirname, '../talker.json');
const router = express.Router();

const returnTalkers = async (req, res) => {
  const talkers = await readJsonData(PATH);
  if (talkers.length === 0) return res.status(200).json([]);

  res.status(200).json(talkers);
};

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readJsonData(PATH);
  const talker = talkers.find((t) => t.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

module.exports = {
  returnTalkers,
  router,
};