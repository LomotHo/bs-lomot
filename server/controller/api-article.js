const jwt = require('jsonwebtoken');
const action = require("../action");

// article
const createArticle = async (ctx, next) => {
    if (typeof(ctx.state.user.logName) == "undefined") {
        return false;
    }
    else {
        let article = ctx.request.body.article;
        let userData = await action.user.getByEmail(ctx.state.user.logName);
        article.userId = userData.id;
        // let data = {article};
        await action.article.create(article);

        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "createArticle",
            "result": true,
            "article": article
        };
    }
};

const getArticle = async (ctx, next) => {
    let data = {
        limit: parseInt(ctx.request.query.limit),
        offset: parseInt(ctx.request.query.offset)
    }
    let articles = await action.article.getArticles(data);

    ctx.response.type = "application/json";
    ctx.response.body = {
        "action": "getArticle",
        "result": true,
        articles
    };
}

const delArticle = async (ctx, next) => {
    let articleId = ctx.request.query.id;
    if (articleId === undefined || articleId == '') {
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "deleteArticle",
            "result": false,
            "error": "no article id"
        };
        return true;
    }
    let article = await action.article.getById(articleId);
    
    if (article == false) {
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "deleteArticle",
            "result": false,
            "error": "no article id"
        };
    }
    if (article.userId === ctx.user.userId) {
        await action.article.deleteById(articleId);
        ctx.response.type = "application/json";
        ctx.response.body = {
            "action": "deleteArticle",
            "result": true
        };
    }
    else {
        
    }
}

module.exports = {
    "POST /api/article": createArticle, //post article
    "GET /api/article": getArticle, //get article
    "DELETE /api/article": delArticle

};
