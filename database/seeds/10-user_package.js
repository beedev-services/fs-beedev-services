
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_package').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_package').insert([
        {user_company: 'Test Company', pkgs_purchased: 'Test Package'}
      ]);
    });
};
