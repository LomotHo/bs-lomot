const jwt = require('jsonwebtoken');
const action = require("../action");

// User 
const cerateUser = async (ctx, next) => {
    let userData = ctx.request.body.userData;
    if (await action.user.cerate(userData)) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "post user",
            "result": true,
            "userData": userData
        };
    }
    else {
        console.log("cerateUser wrong");
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "post user",
            "result": false,
            "error": "create user wrong"
        };
    }
} 

const getUserById = async (ctx, next) => {
    let id = ctx.request.query.id;

    let userData = await action.user.getById(id);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "getUser",
        "result": true,
        "userData": userData
    };
}

const getUserByEmail = async (ctx, next) => {
    let email = ctx.request.query.email;
    console.log("get data of email is: "+email);
    let userData = await action.user.getByEmail(email);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "getUser",
        "result": true,
        "userData": userData
    };
}

const getUserBaseData = async (ctx, next) => {
    if (typeof(ctx.state.user.logName) == "undefined") {
        return false;
    }
    else {
        console.log("ctx.state: " + JSON.stringify(ctx.state));
        let userData = await action.user.getUserData(ctx.state.user.logName);
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "getUserBaseData",
            "result": true,
            "UserBaseData": {
                "email": userData.email,
                "phone": userData.phone,
                "name": userData.name,
                "gender": userData.gender
            }
        };
    }
}

module.exports = {
    "POST /api/user": cerateUser,   // create user
    "GET /api/user/id": getUserById,   // create user
    "GET /api/user/email": getUserByEmail,   // create user

    "GET /api/user": getUserBaseData,

};

