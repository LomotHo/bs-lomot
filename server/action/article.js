const model = require("../model");
const Article = model.Article;


// article
// input article (needed to use try !!!)
const create = async (article) => {
    await Article.create(article);
    return true;
}

const getById = async (id) => {
    let article = await Article.findOne({ where: {"id": id} });
    if (article) {
        return article;
    }
    else {
        return false;
    }
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

const deleteById = async (id) => {
    await Article.destroy( { where: {"id": id} } );
}


module.exports = {
    create, //post article
    getById,
    getArticles, //get article
    deleteById,
};

