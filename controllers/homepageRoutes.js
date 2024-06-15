const router = require('express').Router();
const Project = require("../models/Project");

router.get('/', async (req, res) => {
    try {
      // Get all projects
      const projectData = await Project.findAll();
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
      // Pass serialized data into template
      res.render('homepage', 
        {projects}
      );
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
