const action = require("../action");

module.exports = {
    'GET /': async (ctx, next) => {
    	let data = {
    		limit: 10,
    		offset: 0
    	}
    	let articles = await action.article.getArticles(data);
        ctx.render('index.html', {
            title: 'Welcome',
            articles: articles.rows
        });
    }
};


