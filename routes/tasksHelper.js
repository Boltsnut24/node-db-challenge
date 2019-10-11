const db = require('../data/dbConfig.js');

module.exports = {
    getProjectInfo
}

function getProjectInfo(project_id){
  return db.select('name, desc').from('projects').where(project_id);
}