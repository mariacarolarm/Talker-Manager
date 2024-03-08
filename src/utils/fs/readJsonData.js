const fs = require('fs/promises');

const readJsonData = async (path) => {
  const read = await fs.readFile(path, 'utf-8');
  return JSON.parse(read);
};

module.exports = { readJsonData };