const jwt = require('koa-jwt');

const mid = async (ctx, next) => {
	
	await next();
}


module.exports = function (data) {
	return mid;
};
