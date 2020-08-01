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

module.exports = router;
