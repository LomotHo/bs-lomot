const model = require('../model');


(async () => {
    console.log('init db...');
    await model.sync().success(function(){
        console("init db success");
    });    
})();
