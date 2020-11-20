
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'QueenBee', password: '$2a$10$qJGjkDMVmfYI/7YwdsCN.OgF95vTwaxF0ldJ9OBA0OPOYpPc7Zi6u', role: 'Admin', firstName: 'Melissa', lastName: 'Longenberger', email: 'melissa@beedev-services.com', phone: '570-520-7878'},
        {username: 'TestClient', password: '$2a$10$qJGjkDMVmfYI/7YwdsCN.OgF95vTwaxF0ldJ9OBA0OPOYpPc7Zi6u', role: 'Client', firstName: 'Test', lastName: 'Client', email: 'melissalongenberger@gmail.com'}
      ]);
    });
};
