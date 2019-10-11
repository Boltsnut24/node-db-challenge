
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Brooklyn Bridge', description: 'Build the bridge.', complete: true},
        {id: 2, name: 'Populate Bridge', description: 'Make bridge major traffic hub.', complete: true},
        {id: 3, name: 'Chaos', description: 'Blow up the bridge.', complete: false}
      ]);
    });
};
