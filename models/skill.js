const mongoose = require('mongoose');
let Schema = mongoose.Schema

let skillSchema = new Schema({
  name: {type: String, require: true},
  user: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

let Skill = mongoose.model('Skill', skillSchema)

module.export = Skill
