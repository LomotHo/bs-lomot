const model = require("../model");
const Article = model.Article;


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
//     let id = 
// }


module.exports = {
    createArticle, //post article
    getArticles, //get article
    // delArticle,
};

