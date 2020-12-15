const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
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

function add(pkg) {
    return db("pkgs")
    .insert(pkg, "pkg")
    .then(ids => findByPkg(ids[0]));
}
function update(packageName, changes) {
    return db("pkgs")
        .where({ packageName })
        .update(changes, '*')
}
function remove(id) {
    return db("pkgs")
    .where({ id }).del();
}

