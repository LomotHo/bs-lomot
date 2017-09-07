const model = require("../model");
const User = model.User;

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

const getUserData = async (logName) => {
    return await User.findOne({ where: {"email": logName} });
}

const emailExist = async (email) => {
    let userData = await User.findOne({ where: {"email": email} });
    // console.log(userData);
    if (userData === null) {
        return false;
    }
    else {
        return true;
    }
}

const phoneExist = async (phone) => {
    let userData = await User.findOne({ where: {"phone": phone} });
    // console.log(userData);
    if (userData === null) {
        return false;
    }
    else {
        return true;
    }
}

const signin = async (signinData) => {
    // get userData.pwsswd
    // let userData = await getUserByEmail(signinData.logName);
    let userData = await User.findOne({ where: {"email": signinData.logName} });
    if (userData === null) {
        return {
            "err": "user not exist",
            "result": false
        };
    }
    else if (userData.passwd === signinData.passwd) {
        return {
            "result": true
        };
    }
    else {
        return {
            "err": "wrong passwd",
            "result": false
        };
    }
}

// // checkPasswd 
// const checkPasswd = async (signinData) => {
//     let userData = await getUserByEmail(signinData.logName);
//     if (userData.passwd === signinData.passwd) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

module.exports = {
    cerateUser,   // create user
    getUserById,
    getUserByEmail,
    getUserData,
    
    emailExist,
    phoneExist,

    signin,
};


