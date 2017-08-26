const api = require("../api");

// User 
const cerateUser = async (ctx, next) => {
    let userData = ctx.request.body.userData;
    
    let data = {userData};
    await api.cerateUser(data);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "post user",
        "result": true,
        "userData": userData
    };
} 



// article
const createArticle = async (ctx, next) => {
    let article = ctx.request.body.article;

    let data = {article};
    await api.createArticle(data);

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
    // "GET /api/user": getUser,   // get user by different ways, such as GET: /api/user/?method=email&email=xxx@xxxx.com

    "POST /api/article": createArticle, //post article
    "GET /api/article": getArticle, //get article
};
