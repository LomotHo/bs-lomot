const action = require("../action");

module.exports = {
    'GET /article': async (ctx, next) => {
    	let data = {
    		limit: 10,
    		offset: 0
    	}
    	let articles = await action.article.getArticles(data);
        ctx.render('article.html', {
            title: 'Article of lomot',
            articles: articles.rows
        });
    }
};

