
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pkgs').del()
    .then(function () {
      // Inserts seed entries
      return knex('pkgs').insert([
        {pkgType: 'Internal', package: '#1', packageName: 'Start-Up', pay_frequency: 'One Time', price: '300.00', line01: '* Notion.so Team Workspace (1 year plan for 1 Team-member', line02: '* Add digital documents/policies to workspace', line03: '* Add a page with links to common tools used by employees', line04: '* 10 page total including documents', time: '5-10 business days'}
      ]);
    });
};
