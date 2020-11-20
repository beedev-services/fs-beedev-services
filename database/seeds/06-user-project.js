
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_project').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_project').insert([
        {user_id: 1, project_id: 1}
      ]);
    });
};
