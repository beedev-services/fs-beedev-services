
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payFreq').del()
    .then(function () {
      // Inserts seed entries
      return knex('payFreq').insert([
        {frequency: 'One Time'},
        {frequency: 'Monthly'},
        {frequency: 'Quarterly'},
        {frequency: 'Yearly'},
        {frequency: 'As Needed'},
        {frequency: 'Flexable'}
      ]);
    });
};
