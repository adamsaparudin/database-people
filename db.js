const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1/userskill'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'mongo has problem for connection'))

module.exports = db
