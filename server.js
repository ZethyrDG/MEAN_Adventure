var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static( __dirname + '/game/dist/game' ));
require('./server/config/mongoose.js')()
require('./server/models/player.js')()
app.use(bodyParser.json());
require('./server/config/routes.js')(app)
app.listen(8000, function() {
    console.log("listening on port 8000");
})