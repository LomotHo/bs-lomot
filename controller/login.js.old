const api = require("../api");


const login = async (ctx, next) => {
	let logName = ctx.request.body.logName;
	let passwd = ctx.request.body.passwd;
	let data = {
		logName,
		passwd
	};

	let jwt = await api.createJWT(data);
	
	if (jwt != false) {
		ctx.response.type = "application/json";
	    ctx.response.body = {
	        "action": "login",
	        "result": true,
	        "jwt": jwt
	    };
	}
	else {
		ctx.response.type = "application/json";
	    ctx.response.body = {
	        "action": "login",
	        "result": false,
	        "error": "sec wrong"
	    };
	}

}

module.exports = {
    "POST /login": login,

}
