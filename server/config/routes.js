var mongoose = require('mongoose');
Player = mongoose.model('Player')
players = require('../controllers/players.js')
var path = require("path");
module.exports = function(app){
    app.get('/api/players', function(request, response) {
        players.getAll(request,response)
    })
    app.get('/api/players/:user', function(request, response) {
        players.getOne(request,response)
    })
    app.post('/api/players', function(request, response) {
        players.create(request,response)
    })
    app.put('/api/players/:id', function(request, response) {
        players.update(request,response)
    })
    app.delete('/api/players/:id', function(request, response) {
        players.delete(request,response)
    })
    app.all("*", function(request, response){
        response.redirect("/")
    })
}