const model = require("../model");
const User = model.User;
const Article = model.Article;

// User 
const cerateUser = async (ctx, next) => {
    let id = ctx.request.body.id || 0;
    let name = ctx.request.body.name || "unnamed";
    let userData = ctx.request.body.userData;
    let user = await User.create(userData);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "post user",
        "result": true,
        "userData": userData
    };
} 

const getUser = async (ctx, next) => {
    let method = ctx.request.query.method;
    let userData = {};
    if(method === "id") {
        let id = ctx.request.query.id;
        userData = await User.findById(id);
        ctx.response.body = {
            "action": "getUser",
            "result": true,
            "userData": userData
        };
    }
    else if (method === "email") {
        let email = ctx.request.query.email;
        userData = await User.findOne({ where: {"email": email} });
        ctx.response.body = {
            "action": "getUser",
            "result": true,
            "userData": userData
        };
    }
    else {
        ctx.response.body = {
            "action": "getUser",
            "result": false
        };
    }
};




// article
const createArticle = async (ctx, next) => {
    let article = ctx.request.body.article;
    await Article.create(article);
    ctx.response.body = {
        "action": "createArticle",
        "result": true,
        "article": article
    };
};

const getArticle = async (ctx, next) => {
    let 
        limit = parseInt(ctx.request.query.limit),
        offset = parseInt(ctx.request.query.offset);
    // let article = await Article.findOne({ where: {"title": "xxx2"} });
    let article = await Article.findAndCountAll({
        "where": {
            
        },
        "limit": limit,
        "offset": offset
    });
    ctx.response.body = {
        "action": "getArticle",
        "result": true,
        article
    };
}

// const delArticle = async (ctx, next) => {
//     let id = ctx.request.body

// }


module.exports = {
    "POST /api/user": cerateUser,   // create user
    "GET /api/user": getUser,   // get user by different ways, such as GET: /api/user/?method=email&email=xxx@xxxx.com

    "POST /api/article": createArticle, //post article
    "GET /api/article": getArticle, //get article
};
