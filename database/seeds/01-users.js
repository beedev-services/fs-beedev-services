
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'QueenBee', password: '$2a$10$.LczCCqWQbHl014fVTNRheXfSQ0wBqTUXyp7Q4Eoy3PGhxJhyo5ye', role: 'Admin', firstName: 'Melissa', lastName: 'Longenberger', email: 'melissa@beedev-services.com', phone: '570-520-7878', companyName: "BeeDev Services"},
        {username: 'TestClient', password: '$2a$10$.LczCCqWQbHl014fVTNRheXfSQ0wBqTUXyp7Q4Eoy3PGhxJhyo5ye', role: 'Client', firstName: 'Test', lastName: 'Client', email: 'melissalongenberger@gmail.com', companyName: "Test Company"}
      ]);
    });
};
