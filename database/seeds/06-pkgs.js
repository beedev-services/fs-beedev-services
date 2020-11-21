
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pkgs').del()
    .then(function () {
      // Inserts seed entries
      return knex('pkgs').insert([
        {pkgType: 'Internal', package: '#1', packageName: 'Test Package', pay_frequency: 'One Time'}
      ]);
    });
};
