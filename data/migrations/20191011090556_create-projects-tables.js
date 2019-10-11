
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable();
    tbl.string('description', 1000);
    tbl.bool('complete');
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable()
      .unique();
    tbl.string('desc', 1000);
  })
  .createTable('projects-resources', tbl => {
    tbl.increments();
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references("id").inTable('projects');
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references("id").inTable('resources');
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('desc', 1000)
      .notNullable();
    tbl.string('notes', 10000);
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references("id").inTable('projects');
    tbl.bool('completed');
  })
};

exports.down = function(knex) {
  
};
