exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 128);
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', (tbl) => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 128);
    })
    .createTable('tasks', (tbl) => {
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', (tbl) => {
      tbl.increments();
      tbl
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resourceId')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
