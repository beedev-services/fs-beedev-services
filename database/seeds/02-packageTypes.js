
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('packageTypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('packageTypes').insert([
        {type: 'Internal'},
        {type: 'addOns'},
        {type: 'External'}
      ]);
    });
};
