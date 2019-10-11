
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Steel beams', desc: 'For spanning the bridge.'},
        {id: 2, name: 'Concrete', desc: 'For building road on bridge.'},
        {id: 3, name: 'Traffic signals', desc: 'To direct traffic.'},
        {id: 4, name: 'Jet Fuel', desc: 'To melt the steel beams.'},
        {id: 5, name: 'Explosives', desc: 'To blow up the bridge.'}
      ]);
    });
};
