exports.seed = function (knex) {
  return knex('project_resources').insert([
    { projectId: 1, resourceId: 1 },
    { projectId: 1, resourceId: 2 },
    { projectId: 2, resourceId: 2 }
  ]);
};
