const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('resources')
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: "Error getting resource."})
  })
});

router.post('/', (req, res) => {
  const resourceData = req.body;
  db('resources')
    .insert(resourceData, "id")
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({Error: "Error posting resource."})
    })
})



module.exports = router;