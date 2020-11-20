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
    return db("pkgs");
}

function findBy(filter) {
    return db("pkgs")
    .where(filter).first();
}

function findById(id) {
    return db("pkgs")
    .where({id}).first();
}

function add(pkg) {
    return db("pkgs")
    .insert(pkg, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("pkgs")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("pkgs")
    .where({ id }).del();
}

