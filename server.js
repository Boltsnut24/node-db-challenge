const express = require('express');

const server = express();
server.use(express.json());

//route handlers
const projectsRouter = require('./routes/projectsRouter.js');
const resourcesRouter = require('./routes/resourcesRouter.js');
const tasksRouter = require('./routes/tasksRouter.js');

//routers
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;