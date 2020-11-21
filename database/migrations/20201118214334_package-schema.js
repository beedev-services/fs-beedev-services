
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').notNullable().unique();
      tbl.string('password').notNullable();
      tbl.string('role').notNullable().defaultTo('Client');
      tbl.string('firstName');
      tbl.string('lastName');
      tbl.string('companyName').unique().notNullable();
      tbl.string('email').notNullable();
      tbl.string('phone').unique();
  })
  .createTable('packageTypes', tbl => {
      tbl.increments();
      tbl.string('type').unique();
  })
  .createTable('projectStatus', tbl => {
    tbl.increments();
    tbl.string('currentStatus').notNullable().unique();
})
  .createTable('paidStatus', tbl => {
    tbl.increments();
    tbl.string('billStatus').unique().notNullable();
  })
  .createTable('payFreq', tbl => {
    tbl.increments();
    tbl.string('frequency').unique().notNullable();
  })
  .createTable('pkgs', tbl => {
      tbl.increments();
      tbl.string('pkgType').unsigned().notNullable().references('type').inTable('packageTypes').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('package');
      tbl.string('packageName').unique();
      tbl.string('price');
      tbl.string('pay_frequency').unsigned().notNullable().references('frequency').inTable('payFreq').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('line01');
      tbl.string('line02');
      tbl.string('line03');
      tbl.string('line04');
      tbl.string('time');
  })
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('projectName').notNullable().unique();
      tbl.string('current_status').unsigned().notNullable().references('currentStatus').inTable('projectStatus').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('gitLink').unique();
      tbl.string('testSite').unique();
      tbl.string('liveLink').unique();
      tbl.string('extraLink01').unique();
      tbl.string('extraLink02').unique();
  })
  .createTable('invoices', tbl => {
    tbl.increments();
    tbl.string('company').unsigned().notNullable().references('companyName').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    tbl.integer('invoice').unique().notNullable();
    tbl.string('invoiceStatus').unsigned().notNullable().references('billStatus').inTable('paidStatus').onUpdate('CASCADE').onDelete('CASCADE');
    tbl.string('datePaid');
    tbl.boolean('overDue').defaultTo(0);
  })
  .createTable('user_project', tbl => {
      tbl.string('company_name').unsigned().notNullable().references('companyName').inTable('users');
      tbl.string('project_name').unsigned().notNullable().references('projectName').inTable('projects');
      tbl.primary(['company_name', 'project_name']);
  })
  .createTable('user_package', tbl => {
    tbl.string('user_company').unsigned().notNullable().references('companyName').inTable('users');
    tbl.string('pkgs_purchased').unsigned().notNullable().references('packageName').inTable('pkgs');
    tbl.primary(['user_company', 'pkgs_purchased']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('user_package')
  .dropTableIfExists('user_project')
  .dropTableIfExists('invoices')
  .dropTableIfExists('projects')
  .dropTableIfExists('pkgs')
  .dropTableIfExists('payFreq')
  .dropTableIfExists('paidStatus')
  .dropTableIfExists('projectStatus')
  .dropTableIfExists('packageTypes')
  .dropTableIfExists('users')
};
