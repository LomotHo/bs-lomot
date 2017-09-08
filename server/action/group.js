const model = require("../model");
const Group = model.Group;


const create = async (group) => {
	await Group.create(group);
    return true;
} 

const getByName = async (name) => {
    return await Group.findOne({ where: {"name": name} });
} 

const getById = async (id) => {
    return await Group.findById(id);
} 

const getAll = async () => {
    return await Group.findAll();
} 

const removeByName = async () => {
    return true;
} 

module.exports = {
    create, 
    getByName,
    getById, 
    getAll,
    removeByName,
};

