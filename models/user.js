const mongoose = require('mongoose');
let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, required: true, unique: true},
  skill: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
}, {
  timestamps: true
})
let User = mongoose.model('User', userSchema)

module.exports = User
