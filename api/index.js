const model = require("../model");
const User = model.User;
const Article = model.Article;

// User 
// input userData
const cerateUser = async (userData) => {
    await User.create(userData);
    return true;
} 

// input id, output userdata
const getUserById = async (id) => {
    return await User.findById(id);
}

// input email, output userdata
const getUserByEmail = async (email) => {
    return await User.findOne({ where: {"email": email} });
}

// // input (data.method && data.id) || (data.method data.email)
// const getUser = async (data) => {
//     if(data.method === "id") {
//         return await User.findById(data.id);
//     }
//     else if (data.method === "email") {
//         return await User.findOne({ where: {"email": data.email} });
//     }
//     else {
//         return false;
//     }
// }


// article
// input article (needed to use try !!!)
const createArticle = async (article) => {
    await Article.create(article);
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
    // getUser,   // get user by different ways, such as GET: /api/user/?method=email&email=xxx@xxxx.com
    getUserById,
    getUserByEmail,

    createArticle, //post article
    getArticles, //get article
};
