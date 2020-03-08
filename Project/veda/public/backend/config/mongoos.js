var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/my_bot_db', {useNewUrlParser: true});
//Get all the models from models directory
var models_path = path.join(__dirname,'./../models' );

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>= 0){
        require(models_path + '/' + file)
 
    }
});