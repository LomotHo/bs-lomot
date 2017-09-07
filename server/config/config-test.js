const path = require("path");
const rootpath = path.resolve(__dirname, '..');

var config = {
	db:{
		dialect: 'mysql',
		database: 'test',
		username: 'www',
		password: 'www',
		host: 'localhost',
	    port: 3306
	},
	rootpath: rootpath,
};

module.exports = config;
