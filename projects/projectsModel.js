const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findAllBill,
    findBy,
    findByBill,
    findByName,
    findByBillStatus,
    add,
    addBill,
    update,
    updateBill,
    remove,
    removeBill
};

function findAll() {
    return db("projects");
}
function findAllBill() {
    return db("paidStatus");
}

function findBy(filter) {
    return db("projects")
    .where(filter).first();
}
function findByBill(filter) {
    return db("paidStatus")
    .where(filter).first();
}

function findByName(projectName) {
    return db("projects")
    .where({projectName}).first();
}
function findByBillStatus(billStatus) {
    return db("paidStatus")
    .where({billStatus}).first();
}

function add(projectName) {
    return db("projects")
    .insert(projectName, "id")
    .then(ids => findByName(ids[0]));
}
function addBill(billStatus) {
    return db("paidStatus")
    .insert(billStatus, "billStatus")
    .then(ids => findByBillStatus(ids[0]));
}

function update(projectName, changes) {
    return db("projects")
        .where({ projectName })
        .update(changes, '*')
}
function updateBill(billStatus, changes) {
    return db("paidStatus")
    .where({ billStatus })
    .update(changes, '*')
}

function remove(id) {
    return db("projects")
    .where({ id }).del();
}
function removeBill(id) {
    return db("paidStatus")
    .where({ id }).del();
}

