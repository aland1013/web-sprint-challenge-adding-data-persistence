exports.seed = function (knex) {
  return knex('projects').insert([
    { name: 'project1', description: 'desc1', completed: true },
    { name: 'project2' }
  ]);
};
