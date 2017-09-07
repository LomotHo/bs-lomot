const db = require('../db');

module.exports = db.defineModel('user', {
    email: {
        type: db.STRING(100),
        unique: true
    },
    phone: db.STRING(100),
    passwd: db.STRING(100),
    name: db.STRING(100),
    gender: db.BOOLEAN
});
