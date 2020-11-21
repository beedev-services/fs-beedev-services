
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: 'LAH Photography', current_status: 'Finished'}
      ]);
    });
};
