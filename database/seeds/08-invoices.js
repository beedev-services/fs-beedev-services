
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([
        {company: 'Test Company', invoice: 001, invoiceStatus: 'Sent', datePaid: '10/31/2020', overDue: 0}
      ]);
    });
};
