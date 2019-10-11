
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Brooklyn Bridge', desc: 'Build the bridge.', complete: 'true'},
        {id: 2, name: 'Populate Bridge', desc: 'Make bridge major traffic hub.', complete: 'true'},
        {id: 3, name: 'Chaos', desc: 'Blow up the bridge.', complete: 'false'}
      ]);
    });
};
