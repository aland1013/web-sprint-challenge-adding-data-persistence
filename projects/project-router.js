const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

/* ----- GET /api/projects ----- */
router.get('/', (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

/* ----- GET /api/projects/resources ----- */
router.get('/resources', (req, res) => {
  Projects.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

/* ----- GET /api/projects/tasks ----- */
router.get('/tasks', (req, res) => {
  Projects.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

/* ----- POST /api/projects ----- */
router.post('/', (req, res) => {
  const newProject = req.body;

  Projects.addProject(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

/* ----- POST /api/projects/resources ----- */
router.post('/resources', (req, res) => {
  const newResource = req.body;

  Projects.addResource(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;
