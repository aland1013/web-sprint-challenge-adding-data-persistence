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

/* ----- GET /api/projects/:id/tasks ----- */
router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasksByProjectId(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find tasks for given project' });
      }
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

/* ----- POST /api/projects/tasks ----- */
router.post('/tasks', (req, res) => {
  const newTask = req.body;

  Projects.addTask(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router;
