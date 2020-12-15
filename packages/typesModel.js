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
    return db("packageTypes");
}

function findBy(filter) {
    return db("packageTypes")
    .where(filter).first();
}

function findById(id) {
    return db("packageTypes")
    .where({id}).first();
}

function add(type) {
    return db("packageTypes")
    .insert(type, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("packageTypes")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("packageTypes")
    .where({ id }).del();
}

