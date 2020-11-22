const db = require("../database/db-config.js");

module.exports = {
    findCoProjects,
    findCoPackages,
    findByCoProjects,
    findByCoPackages,
    findByCoNameProject,
    findByCoNamePackage,
    addCoProject,
    addCoPackage,
    removeCoProject,
    removeCoPackage
};

function findCoProjects() {
    return db("user_project");
}
function findCoPackages() {
    return db("user_package")
}

function findByCoProjects(filter) {
    return db("user_project")
    .where(filter).first();
}
function findByCoPackages(filter) {
    return db("user_package")
    .where(filter).first();
}

function findByCoNameProject(company_name) {
    return db("user_project")
    .where({company_name}).first();
}
function findByCoNamePackage(user_company) {
    return db("user_package")
    .where({user_company}).first();
}

function addCoProject(project_name) {
    return db("user_project")
    .insert(project_name, "project_name")
    .then(ids => findByCoProjects(ids[0]));
}
function addCoPackage(pkgs_purchased) {
    return db("user_package")
    .instert(pkgs_purchased, "pkgs_purchased")
    .then(ids => findByCoPackages(ids[0]));
}

function removeCoProject(id) {
    return db("user_project")
    .where({ id}).del();
}
function removeCoPackage(id) {
    return db("user_package")
    .where({ id }).del();
}

