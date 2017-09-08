const db = require('../db');

module.exports = db.defineModel('article', {
    userId: db.STRING(50),
    title: db.STRING(100),
    title2: db.STRING(100),
    content: db.STRING(5000),
    accessableGroup: db.STRING(1000),
});
