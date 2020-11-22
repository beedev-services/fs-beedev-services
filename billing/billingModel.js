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
    return db("invoices");
}

function findBy(filter) {
    return db("invoices")
    .where(filter).first();
}

function findById(invoice) {
    return db("invoices")
    .where({invoice}).first();
}

function add(invoice) {
    return db("invoices")
    .insert(invoice, "id")
    .then(ids => findById(ids[0]));
}

function update(invoice, changes) {
    return db("invoices")
        .where({ invoice })
        .update(changes, '*')
}

function remove(invoice) {
    return db("invoices")
    .where({ invoice }).del();
}

