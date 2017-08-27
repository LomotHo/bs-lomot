const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const path = require('path');
const templating = require('./module/templating');
const controller = require('./controller'); 
const authentication = require('./module/authentication');

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


app.use(bodyParser());

// add nunjucks as view:
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 
app.use(authentication());
app.use(async (ctx, next) => {
	await next();
});

// Controler & router
app.use(controller(path.resolve(__dirname, './controller')));

app.listen(3000);
console.log('app started at port 3000...');
