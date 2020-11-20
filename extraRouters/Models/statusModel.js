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
    return db("status");
}

function findBy(filter) {
    return db("status")
    .where(filter).first();
}

function findById(id) {
    return db("status")
    .where({id}).first();
}

function add(pkg) {
    return db("status")
    .insert(pkg, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("status")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("status")
    .where({ id }).del();
}

