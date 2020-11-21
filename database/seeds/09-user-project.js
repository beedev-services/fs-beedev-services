
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_project').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_project').insert([
        {company_name: 'Test Company', project_name: 'LAH Photography'}
      ]);
    });
};
