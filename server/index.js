const { Console } = require("console");

const app = require("express")();
const httpServer = require("http").createServer(app);

options={
    cors:true,
    origins:["http://127.0.0.1:3000"],
   }

const io = require("socket.io")(httpServer, options);

const port = process.env.port || 5000;

httpServer.listen(port, function(){ console.log("Server has started on port : " + {port}.port)});

// Code from Socket.io official documentation ends here


const {createRoom, joinRoom} = require('./rooms');


io.on('connection', function(socket){

    console.log(`user ${socket.id} connected`);
    let colors = ['blue', 'red', 'green', 'yellow', 'black', 'orange']
    let roomsColors = {}

    // When a user tries to create a room, this event fires.
    socket.on('createRoomEvent', function(roomName, userName ,callback){
        
        socket.data.username = userName;

        roomNameOk =  createRoom(io ,socket, roomName)
        
        callback({

            roomNameOk : roomNameOk

        })

        if ( roomNameOk[0] ){
            
            
            let playersMap = {}
            let player = {};

            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })
            console.log(playersMap)
            io.to(roomName).emit("playerJoined", playersMap)

        }
        

    })

    // When a user tries to join a room, this event fires
    socket.on('joinRoomEvent', function(roomName, userName ,callback){
        
        
        socket.data.username = userName;
        roomNameOk =  joinRoom(io ,socket, roomName)
        
        callback({

            roomNameOk : roomNameOk

        })

        if ( roomNameOk[0] ){
            
            let playersMap = {}
            let player = {};
            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })
            io.to(roomName).emit("playerJoined", playersMap)

        }

    })


    socket.on('disconnect', function(){

        console.log("User disconnected");

    })


} )