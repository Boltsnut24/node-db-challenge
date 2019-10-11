const express = require('express');
const server = require('./api/server');

const port = process.env.PORT || 8888;

server.listen(port, () => {
  console.log("Listening on port 8888")
});