let db = require('../db.js')
let User = require('../models/user')

create = function(req, res, next) {
  User.create(req.body, (err, user) => {
    if (err) return err
    res.send(user)
  })
}

read = function(req, res, next) {
  User.find({}, (err, docs) => {
    if(err) throw err
    res.send(docs)
  })
}

update = function(req, res, next) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, (err, docs) => {
    res.send(docs)
  })
}

deleteData = function(req, res, next) {
  User.findById({_id: req.params.id}).remove( (err, docs) => {
    if(err) return err
    else {
      res.send(docs)
    }
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: deleteData
}
