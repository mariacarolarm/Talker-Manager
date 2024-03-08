const path = require('path');
const { readJsonData } = require('../utils/fs/readJsonData');

const PATH = path.join(__dirname, '../talker.json');

const returnTalkers = async (req, res) => {
  const talkers = await readJsonData(PATH);
  if (talkers.length === 0) return res.status(200).json([]);

  res.status(200).json(talkers);
};

module.exports = {
  returnTalkers,
};