const crypto = require('crypto');
const model = require("../model");
const User = model.User;
const Article = model.Article;

// User 
// input userData
const cerateUser = async (userData) => {
    await User.create(userData);
    return true;
} 

// input id, output userdata
const getUserById = async (id) => {
    return await User.findById(id);
}

// input email, output userdata
const getUserByEmail = async (email) => {
    return await User.findOne({ where: {"email": email} });
}


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
//     let id = ctx.request.body

// }

// login 
// const checkPasswd = async (data) => {
//     let userData = await getUserByEmail(data.logName);
//     if (userData.passwd === data.passwd) {

//         return true;
//     }
//     else {
//         return false;
//     }
// }


// useless whell
const createJWT = async (data) => {
    let userData = await getUserByEmail(data.logName);
    if (userData.passwd === data.passwd) {
        // passwd correct
        let now = Date.now();
        let jwtOrign = {
            head: {
                "alg": "HS256",
                "typ": "JWT"
            },
            playload: {
                "iss": "lomot",
                "iat": now,
                "exp": now + 86400000,
                "sub": ""
            }
        }
        let headerBuffer = new Buffer(JSON.stringify(jwtOrign.head), 'base64');
        let payloadBuffer = new Buffer(JSON.stringify(jwtOrign.playload), 'base64');
        let encodedString = headerBuffer.toString() + '.' + payloadBuffer.toString();
        let hmac = crypto.createHmac('sha256', userData.passwd);
        hmac.update(encodedString);
        let signature =  hmac.digest('hex');
        let jwt = encodedString + "." + signature;

        return jwt;
    }
    else {
        return false;
    }

}



module.exports = {
    cerateUser,   // create user
    // getUser,   // get user by different ways, such as GET: /api/user/?method=email&email=xxx@xxxx.com
    getUserById,
    getUserByEmail,

    createArticle, //post article
    getArticles, //get article

    createJWT,
};
