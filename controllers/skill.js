let db = require('../db.js')
let Skill = require('../models/skill')

create = function(req, res, next) {
  Skill.create(req.body, (err, docs) => {
    if(err) return (err)
    res.send(docs)
  })
}

read = function(req, res, next) {
  Skill.find({}, (err, docs) => {
    // if(err) return (err)
    res.send(docs)
  })
}

update = function(req, res, next) {
  Skill.findOneAndUpdate({_id: req.params.id}, req.body, (err, docs) => {
    if(err) return (err)
    res.send(docs)
  })
}

deleteData = function(req, res, next) {
  Skill.find({_id: req.params.id}).remove( (err, docs) => {
    if(err) return (err)
    res.send(docs)
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: deleteData
}
