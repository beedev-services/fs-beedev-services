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
    return db("user_project");
}

function findBy(filter) {
    return db("user_project")
    .where(filter).first();
}

function findById(id) {
    return db("user_project")
    .where({id}).first();
}

function add(pkg) {
    return db("user_project")
    .insert(pkg, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("user_project")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("user_project")
    .where({ id }).del();
}

