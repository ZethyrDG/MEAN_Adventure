var mongoose = require('mongoose');
module.exports = function() {
var PlayerSchema = new mongoose.Schema({
   username: { type : String, required: true, minlength: 2, unique: true },
   location: {type: String},
   progress: {
    frontroom: Boolean,
    myBedroom: Boolean,
    parlor: Boolean,
    shed: Boolean,
    knight: Boolean,
    translate: Boolean,

    navigation: Boolean,
    engine: Boolean,
    data: Boolean,
    savedAlien: Boolean,
    spacedone: Boolean,
    
    mainroom: Boolean,
    gotwand: Boolean,
    lab: Boolean,
    labpuzzle1: Boolean,
    labpuzzle2: Boolean,
    labpuzzle3: Boolean,
    dungeon: Boolean,
    savedthewizard: Boolean,
    castledone: Boolean,
    dungeonfail: Boolean,

    blueflame: Boolean,
    redflame: Boolean,
   },
   inventory: {
    hook: Boolean,
    ladder: Boolean,
    basementkey: Boolean,
    shedkey: Boolean,
    aliendevice: Boolean,
    
    fixedpart1: Boolean,
    fixedpart2: Boolean,
    fixedpart3: Boolean,

    wand: Boolean,
    potion: Boolean,
    spellbook: Boolean,

    blueflame: Boolean,
    redflame: Boolean,
   },
   }, {timestamps:true})
   mongoose.model('Player', PlayerSchema);
   var Player = mongoose.model('Player')
}