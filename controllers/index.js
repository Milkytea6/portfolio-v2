const router = require('express').Router();
const resumeRoutes = require('./resumeRoutes');
const homepageRoutes = require('./homepageRoutes');

router.use('/', homepageRoutes);
router.use('/resume', resumeRoutes);

module.exports = router;