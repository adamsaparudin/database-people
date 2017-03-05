var express = require('express');
var router = express.Router();
// let Skill = require('../controllers/skill')
let Skill = require('../models/skill')


/* GET users listing. */
router.get('/', function(req, res) {
  Skill.find({}, function(err, docs) {
    res.send(docs)
  })
})

// router.post('/', Skill.create)
//
// router.put('/:id', Skill.update)
//
// router.delete('/:id', Skill.delete)

module.exports = router;
