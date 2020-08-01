const db = require('../data/db-config');

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource
};

function getProjects() {
  return db('projects');
}

function getResources() {
  return db('resources');
}

function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.projectId', 'projects.id')
    .select(
      'tasks.id',
      { taskDesc: 'tasks.description' },
      'tasks.notes',
      'tasks.completed',
      { projName: 'projects.name' },
      { projDesc: 'projects.description' }
    );
}

function addProject(newProject) {
  return db('projects')
    .insert(newProject)
    .then((id) => {
      return newProject;
    });
}

function addResource(newResource) {
  return db('resources')
    .insert(newResource)
    .then((id) => {
      return newResource;
    });
}
