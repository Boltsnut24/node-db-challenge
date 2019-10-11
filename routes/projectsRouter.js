const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('projects')
  .then(project => {
    project.forEach(proj => {
      if(proj.complete == 1){
        proj.complete = true;
      } else if(proj.complete == 0) {
        proj.complete = false;
      }
    })
    res.status(200).json(project);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: "Error getting projects."})
  })
});

router.post('/', (req, res) => {
  const projectData = req.body;
  db('projects')
    .insert(projectData, "id")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({Error: "Error posting projects."})
    })
})



module.exports = router;