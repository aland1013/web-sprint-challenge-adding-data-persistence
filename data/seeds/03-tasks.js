exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      projectId: 1,
      description: 'task1',
      notes: 'notes1',
      completed: true
    },
    { projectId: 2, description: 'task2', completed: false }
  ]);
};
