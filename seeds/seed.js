const sequelize = require('../config/connections');
const Project = require("../models/Project");

const projectData = require('./projects.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Project.bulkCreate(projectData);
    process.exit(0);

};

seedDatabase();