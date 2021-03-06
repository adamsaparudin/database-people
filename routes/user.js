var express = require('express');
var router = express.Router();
let User = require('../controllers/user')

/* GET users listing. */
router.get('/', User.read);

router.post('/', User.create)

router.put('/:id', User.update)

router.delete('/:id', User.delete)

module.exports = router;
