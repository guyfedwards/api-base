const db = require('../src/db');
const clearDb = require('./clearDb');

module.exports = () => {
  beforeEach(() => {
    clearDb(db);
  });
};
