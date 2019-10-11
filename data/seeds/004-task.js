
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, desc: 'Build skeleton of bridge', notes: 'Steel beam framing', project_id: 1, completed: true},
        {id: 2, desc: 'Construct roadway', notes: 'Concrete driving surface', project_id: 1, completed: true},
        {id: 3, desc: 'Paint lines', notes: '', project_id: 1, completed: true},
        {id: 4, desc: 'Install traffic lights', notes: '', project_id: 2, completed: true},
        {id: 5, desc: 'Advertise new bridge', notes: 'News reports, radio, cafe posters', project_id: 2, completed: true},
        {id: 6, desc: 'Plant explosives under roadway', notes: 'Target roadway, steel beams to strong', project_id: 3, completed: true},
        {id: 7, desc: 'Place jet fuel tanks on steel beam structure', notes: 'This must light first.', project_id: 3, completed: true},
        {id: 8, desc: 'DETONATE!!!!!!', notes: 'Play Sweet Victory as you hit button.', project_id: 3, completed: false},
      ]);
    });
};
