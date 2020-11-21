const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findAllTypes,
    findAllPayFreq,
    findBy,
    findByTypes,
    findByPayFreq,
    findByPkg,
    findByType,
    findByFreq,
    add,
    addType,
    addFrequency,
    update,
    updateType,
    updateFrequency,
    remove,
    removeType,
    removeFrequency
};

function findAll() {
    return db("pkgs");
}
function findAllTypes() {
    return db("packageTypes");
}
function findAllPayFreq() {
    return db("payFreq");
}

function findBy(filter) {
    return db("pkgs")
    .where(filter).first();
}
function findByTypes(filter) {
    return db("packageTypes")
    .where(filter).first();
}
function findByPayFreq(filter) {
    return db("payFreq")
    .where(filter).first();
}

function findByPkg(packageName) {
    return db("pkgs")
    .where({packageName}).first();
}
function findByType(type) {
    return db("packageTypes")
    .where({type}).first()
}
function findByFreq(frequency) {
    return db("payFreq")
    .where({frequency}).first()
}

function add(pkg) {
    return db("pkgs")
    .insert(pkg, "pkg")
    .then(ids => findByPkg(ids[0]));
}
function addType(type) {
    return db("packageTypes")
    .insert(type, "frequency")
    .then(ids => findByType(ids[0]));
}
function addFrequency(frequency) {
    return db("payFreq")
    .insert(frequency, "frequency")
    .then(ids => findByFreq(ids[0]));
}

function update(packageName, changes) {
    return db("pkgs")
        .where({ packageName })
        .update(changes, '*')
}
function updateType(type, changes) {
    return db("packageTypes")
    .where({ type })
    .update(changes, '*')
}
function updateFrequency(frequency, changes) {
    return db("payFreq")
    .where({ frequency })
    .update(changes, '*')
}

function remove(id) {
    return db("pkgs")
    .where({ id }).del();
}
function removeType(id) {
    return db("packageTypes")
    .where({ id }).del();
}
function removeFrequency(id) {
    return db("payFreq")
    .where({ id }).del();
}

