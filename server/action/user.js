const model = require("../model");
const User = model.User;

// User 
// input userData
const cerate = async (userData) => {
    await User.create(userData);
    return true;
} 

// input id, output userdata
const getById = async (id) => {
    return await User.findById(id);
}

// input email, output userdata
const getByEmail = async (email) => {
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

module.exports = {
    cerate,   // create user
    getById,
    getByEmail,
    getUserData,
    
    emailExist,
    phoneExist,

    signin,
};


