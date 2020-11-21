
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('paidStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('paidStatus').insert([
        {billStatus: 'Sent'},
        {billStatus: 'Paid'}
      ]);
    });
};
