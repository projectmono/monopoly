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


    let gameOn = false;
    let countDown = 0;

    console.log(`user ${socket.id} connected`);

    // When a user tries to create a room, this event fires.
    socket.on('createRoomEvent', function(roomName, userName ,callback){
        
        socket.data.ready = false;
        socket.data.hasTurn = false;

        socket.data.username = userName;
        socket.data.position = 0;
        socket.data.money = 1500;

        roomNameOk =  createRoom(io ,socket, roomName)
        
        callback({

            roomNameOk : roomNameOk

        })

        if ( roomNameOk[0] ){
            
            
            let playersMap = {}
            let player = { position : socket.data.position, money : socket.data.money };

            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })
            
            io.to(roomName).emit("playerJoined", playersMap)

        }
        

    })

    // When a user tries to join a room, this event fires
    socket.on('joinRoomEvent', function(roomName, userName ,callback){
        

        socket.data.ready = false;
        socket.data.hasTurn = false;
        socket.data.username = userName;
        socket.data.position = 0;
        socket.data.money = 1500;




        roomNameOk =  joinRoom(io ,socket, roomName)
        
        callback({

            roomNameOk : roomNameOk

        })

        if ( roomNameOk[0] ){
            
            let playersMap = {}
            let player = { position : socket.data.position, money : socket.data.money };
            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })
            io.to(roomName).emit("playerJoined", playersMap)

        }

    })

    socket.on("rollDice", function(playerName){


        let room = Array.from(socket.rooms)[1];
        let randomValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        io.to(room).emit("diceRoll", randomValue, socket.data.username);

    })

    socket.on("ready", function(){

    
        let room = Array.from(socket.rooms)[1];

        const players = io.sockets.adapter.rooms.get(room);

        playersArray = [...players];
        
    if ( !socket.data.ready ){

    socket.data.ready = true;

        if ( io.sockets.adapter.rooms.get(room).size >= 2){
        

            for ( x of playersArray ){

                if ( !io.sockets.sockets.get(x).data.ready ){
                    return;
                }

            }

            io.to(room).emit("gameStart");

            io.sockets.sockets.get(playersArray[0]).data.hasTurn = 1;

            let currentPlayer = 0;

            setInterval(function() {

                countDown++;
                console.log("Count : " + countDown);
                if ( !(countDown % 60) ){

                    io.sockets.sockets.get( playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = 0;
                    currentPlayer++;
                    io.sockets.sockets.get( playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = 1;
                    socket.emit("playerHasTurn", io.sockets.sockets.get( playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username);

                    console.log("Turn for : " + io.sockets.sockets.get( playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username);
                }


            } , 100);

        }
    }    

        

    })

    socket.on('disconnect', function(){

        console.log("User disconnected");

    })


} )