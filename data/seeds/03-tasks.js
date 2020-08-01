exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      name: 'task1',
      projectId: 1,
      description: 'desc1',
      notes: 'notes1',
      completed: true
    },
    { name: 'task2', projectId: 2, description: 'desc2' }
  ]);
};
