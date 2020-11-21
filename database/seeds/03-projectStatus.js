
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectStatus').insert([
        {currentStatus: 'Contract Signed'},
        {currentStatus: 'In Progress'},
        {currentStatus: 'Finished'}
      ]);
    });
};
