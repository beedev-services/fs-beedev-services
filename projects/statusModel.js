const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("projectStatus");
}

function findBy(filter) {
    return db("projectStatus")
    .where(filter).first();
}

function findById(id) {
    return db("projectStatus")
    .where({id}).first();
}

function add(statu) {
    return db("projectStatus")
    .insert(statu, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("projectStatus")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("projectStatus")
    .where({ id }).del();
}

