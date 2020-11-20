
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pkgs').del()
    .then(function () {
      // Inserts seed entries
      return knex('pkgs').insert([
        {type_id: 1, package: '#1', name: 'Test Package'}
      ]);
    });
};
