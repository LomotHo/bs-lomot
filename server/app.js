const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const koajwt = require('koa-jwt');
const path = require('path');
const templating = require('./module/templating');
const controller = require('./controller'); 
const secret = require("./module/secret").secret;

// const authentication = require('./module/authentication'); 
const isProduction = process.env.NODE_ENV === 'production';


// record URL
app.use(async (ctx, next) => {
    console.log(ctx.request.method+' '+ctx.request.url); 
    await next(); 
});

// static file support:
if (! isProduction) {
    let staticFiles = require('./module/static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// bodyParser
app.use(bodyParser());

// add nunjucks as view, add ctx.render
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// authentication
// app.use(authentication());
app.use( async (ctx, next) => {
	return next().catch((err) => {
		if (401 == err.status) {
			console.log("Authorization failed");
			ctx.status = 401;
			ctx.body = 'Protected resource, use Authorization header to get access\n';
		} else {
			throw err;
		}
	});
});

app.use(koajwt({ 
	"secret": secret,
	"iss": "lomot",
	"sub": ""
}).unless({ 
	path: [
		/^\/public/, 
		/^\/signin/, 
		/^\/signup/
	] 
}));

//		/^\/api\/article/, 


// app.use(async (ctx, next) => {
//     ctx.body = ctx.state.user;
//     await next(); 
// });



// Controler & router
app.use(controller(path.resolve(__dirname, './controller')));

app.listen(3000);
console.log('app started at port 3000...');
