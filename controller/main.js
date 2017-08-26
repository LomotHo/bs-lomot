const api = require("../api");

module.exports = {
    'GET /': async (ctx, next) => {
    	let data = {
    		limit: 10,
    		offset: 0
    	}
    	let articles = await api.getArticles(data);
    	console.log("articles:  ");
    	console.log(articles);
        ctx.render('index.html', {
            title: 'Welcome',
            articles: articles.rows
        });
    }
};


