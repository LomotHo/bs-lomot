const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller'); 
const templating = require('./module/templating');

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


// Controler & router
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
