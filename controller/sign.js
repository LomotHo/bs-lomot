const action = require("../action");
const jwt = require('jsonwebtoken');
const secret = require("../module/secret").secret;


const signin = async (ctx, next) => {
    let signinData = ctx.request.body.signinData;
    let signinResult = await action.user.signin(signinData);

    ctx.response.type = "application/json";
    if (signinResult.result) {
        // let token = jwt.sign(JSON.stringify(signinData.user), secret, { expiresIn: 3600 });
        // let token = jwt.sign(signinData.logName, secret, { expiresIn: 60 * 60 });
    	let token = jwt.sign( {xxx: JSON.stringify(signinData.logName)}, secret, { expiresIn: 60 * 60 });
        console.log(signinData.logName);
        ctx.response.body = {
            "action": "signin",
            "token": token,
            "result": true
        };
    }
    else {
        console.log(signinResult.err);
        ctx.response.body = {
            "action": "signin",
            "err": signinResult.err,
            "result": false
        };
    }
}

const signup = async (ctx, next) => {
    let signupData = ctx.request.body.signupData; 

    if (await action.user.emailExist(signupData.email)) {
    	ctx.response.body = {
	        "action": "signup",
	        "err": "email exist",
	        "result": false
	    };
    }
    else if (await action.user.cerateUser(signupData)) {
	    ctx.response.body = {
	        "action": "signup",
	        signupData,
	        "result": true
	    };
    }
    else {
    	ctx.response.body = {
	        "action": "signup",
	        "err": "unknow err",
	        "result": false
	    };
    }
}


module.exports = {
    "POST /signin": signin,   // signin
    "POST /signup": signup,   // signin
};
