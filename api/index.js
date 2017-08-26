const model = require("../model");
const User = model.User;
const Article = model.Article;

// User 
// input data.userData
const cerateUser = async (data) => {
    await User.create(data.serData);
    return true;
} 
// input (data.method && data.id) || (data.method data.email)
const getUser = async (data) => {
    if(data.method === "id") {
        return await User.findById(data.id);
    }
    else if (data.method === "email") {
        return await User.findOne({ where: {"email": data.email} });
    }
    else {
        return false;
    }
}


// article
// input data.article (needed to use try !!!)
const createArticle = async (data) => {
    await Article.create(data.article);
    return true;
}

// input data.limit data.offset
const getArticles = async (data) => {
    return await Article.findAndCountAll({
        "where": {
            
        },
        "limit": data.limit,
        "offset": data.offset
    });
}

// const delArticle = async (ctx, next) => {
//     let id = ctx.request.body

// }


module.exports = {
    cerateUser,   // create user
    getUser,   // get user by different ways, such as GET: /api/user/?method=email&email=xxx@xxxx.com

    createArticle, //post article
    getArticles, //get article
};
