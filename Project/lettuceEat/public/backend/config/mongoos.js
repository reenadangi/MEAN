var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');



mongoose.connect('mongodb://localhost:27017/my_first_db', {useNewUrlParser: true})
.then(()=>{console.log("Connected to DB")})
.catch(()=>{console.log("Connection Fail")});





//Get all the models from models directory
var models_path = path.join(__dirname,'./../models' );

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>= 0){
        require(models_path + '/' + file)
  
    }
});