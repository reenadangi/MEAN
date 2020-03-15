var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var server = app.listen(8000, function(){})

let io = require('socket.io').listen(server);

let users = [];
let msgs=[];

io.sockets.on('connection', function (socket) {
  socket.on("new_user_request", function(data){
        console.log('New connection from ' + socket.id);
       
        // add this new user in user array
        let user={"client":socket.id,"name":data.name}
        users.push(user)
        socket.emit("existing_users", {users: users });
        socket.broadcast.emit("update_users", {user:data.name})
        // io.emit("update_users", {user:data.name})
    });
    
	socket.on("reset", function(){

        users = [];
        msgs=[];
        console.log("in reset",users)
        io.emit("clear_users")
       
    });
    socket.on("send", function(data){
        let user=users.filter(x => x.client == socket.id)
        console.log(user[0]['name'])

        msg={"user":user[0]['name'],"msg":data.msg}
        msgs.push(msg)
        console.log("in send at server",msgs)
        io.emit("update_chat",{msg:msg});
        
		
    });
    socket.on('disconnect', function (data) {

        console.log('user disconnected', socket.id);
        // delete user from array and push changes
        users = users.filter(x => x.client !== socket.id)
        console.log("after disconncting", users)
        io.emit("user_disconnected", {users: users });
        // io.emit("user_disconnected",{users:user})

    });

});
app.get('/', function(req, res) {
  res.render('index');
})
