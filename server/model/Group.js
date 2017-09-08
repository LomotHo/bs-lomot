const db = require('../db');

module.exports = db.defineModel('group', {
	name: {
        type: db.STRING(100),
        unique: true
    }
});
