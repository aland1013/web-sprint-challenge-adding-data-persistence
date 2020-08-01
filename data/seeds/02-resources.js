exports.seed = function (knex) {
  return knex('resources').insert([
    { name: 'resource1', description: 'desc1' },
    { name: 'resource2' }
  ]);
};
