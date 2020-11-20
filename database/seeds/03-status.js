
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {status: 'In Progress'},
        {status: 'Finished'},
        {status: 'Contract Signed'}
      ]);
    });
};
