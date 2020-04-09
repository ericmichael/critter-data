const { Critter, Coordinate } = require('./models');

var express = require('express')
var path = require('path')

app = express();
app.set('port', 3002);

app.use(express.static(path.join(__dirname, 'static')))

var server = app.listen(app.get('port'), function () {
    console.log("Server started...")
});

app.get("/critters", function (req, res) {
    //send all the critters in JSON format
});

app.get("/critters/:id", function (req, res){
    var critter_id = req.params.id;

    //find the critter with that id, include Coordinates
    //send in JSON format
})