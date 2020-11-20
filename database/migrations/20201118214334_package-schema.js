
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').notNullable().unique();
      tbl.string('password').notNullable();
      tbl.string('role').notNullable().defaultTo('Client');
      tbl.string('firstName');
      tbl.string('lastName');
      tbl.string('email').notNullable();
      tbl.string('phone').unique();
  })
  .createTable('types', tbl => {
      tbl.increments();
      tbl.string('type').unique();
  })
  .createTable('status', tbl => {
    tbl.increments();
    tbl.string('status').notNullable().unique();
})
  .createTable('pkgs', tbl => {
      tbl.increments();
      tbl.integer('type_id').unsigned().notNullable().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('package');
      tbl.string('name');
      tbl.string('price');
      tbl.string('line01');
      tbl.string('line02');
      tbl.string('line03');
      tbl.string('line04');
      tbl.string('time');
  })
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('projectName').notNullable().unique();
      tbl.integer('status_id').unsigned().notNullable().references('id').inTable('status').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('gitLink').unique();
      tbl.string('testSite').unique();
      tbl.string('liveLink').unique();
      tbl.string('extraLink01').unique();
      tbl.string('extraLink02').unique();
  })
  .createTable('user_project', tbl => {
      tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
      tbl.primary(['user_id', 'project_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('user_project')
  .dropTableIfExists('projects')
  .dropTableIfExists('pkgs')
  .dropTableIfExists('status')
  .dropTableIfExists('types')
  .dropTableIfExists('users')
};
