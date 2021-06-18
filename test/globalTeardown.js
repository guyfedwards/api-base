const db = require('../src/db');

module.exports = () => {
  // console.log('db', db);
  if (db && db.destroy) {
    db.destroy();
  }
};
