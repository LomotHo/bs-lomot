const action = require("../action");
const jwt = require('jsonwebtoken');
const secret = require("../module/secret").secret;


const signin = async (ctx, next) => {
    let signinData = ctx.request.body.signinData;
    let signinResult = await action.user.signin(signinData);

    ctx.response.type = "application/json";
    if (signinResult.result) {
<<<<<<< HEAD
    	  let token = jwt.sign({logName: signinData.logName}, secret, { expiresIn: 3600 });
=======
    	let token = jwt.sign({logName: signinData.user}, secret, { expiresIn: 3600 });
>>>>>>> parent of 60d10d9... 	modified:   controller/api.js
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
