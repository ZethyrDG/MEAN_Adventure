var mongoose = require('mongoose');
module.exports = function() {
var PlayerSchema = new mongoose.Schema({
   username: { type : String, required: true, minlength: 2, unique: true },
   inventory: {
       basementKey: Boolean,
   },
   progress: {
       basement: Boolean,
   },
   location: {type: String}
   }, {timestamps:true})
   mongoose.model('Player', PlayerSchema);
   var Player = mongoose.model('Player')
}