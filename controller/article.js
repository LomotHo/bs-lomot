const api = require("../api");

module.exports = {
    'GET /article': async (ctx, next) => {
    	let data = {
    		limit: 10,
    		offset: 0
    	}
    	let articles = await api.getArticles(data);
        ctx.render('article.html', {
            title: 'Article of lomot',
            articles: articles.rows
        });
    }
};

