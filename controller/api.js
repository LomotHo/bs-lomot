const api = require("../api");

// User 
const cerateUser = async (ctx, next) => {
    let userData = ctx.request.body.userData;
    
    // let data = {userData};
    if (await api.cerateUser(userData)) {
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

    let userData = await api.getUserById(id);

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
    let userData = await api.getUserByEmail(email);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "getUser",
        "result": true,
        "userData": userData
    };
}


// article
const createArticle = async (ctx, next) => {
    let article = ctx.request.body.article;

    // let data = {article};
    await api.createArticle(article);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "createArticle",
        "result": true,
        "article": article
    };
};

const getArticle = async (ctx, next) => {
    let data = {
        limit: parseInt(ctx.request.query.limit),
        offset: parseInt(ctx.request.query.offset)
    }
    let articles = await api.getArticles(data);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "getArticle",
        "result": true,
        articles
    };
}

// const delArticle = async (ctx, next) => {
//     let id = ctx.request.body

// }


module.exports = {
    "POST /api/user": cerateUser,   // create user
    "GET /api/user/id": getUserById,   // create user
    "GET /api/user/email": getUserByEmail,   // create user

    "POST /api/article": createArticle, //post article
    "GET /api/article": getArticle, //get article

};
