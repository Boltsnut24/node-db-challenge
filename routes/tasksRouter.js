const express = require('express');
const helper = require('./tasksHelper.js')
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    .select('tasks.id', 'tasks.desc', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
    .then(task => {
      task.forEach(t => {
        if(t.completed == 1){
          t.completed = true;
        } else if(t.completed == 0) {
          t.completed = false;
        }
      })
      res.status(200).json(task);
    })
        .catch(err => {
          console.log(err);
          res.status(500).json({ Error: "Error getting task." })
        })
    });

  router.post('/', (req, res) => {
    const taskData = req.body;
    db('tasks')
      .insert(taskData, "id")
      .then(task => {
        res.status(200).json(task);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ Error: "Error posting task." })
      })
  });


  module.exports = router;