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


function emptyBoard(){

    let board = [];

    for ( let i = 0; i < 40; i++ ){

        board[i] = "bank";

    }
    return board;
}


io.on('connection', function(socket){


    let gameOn = false;

    let rooms = {};

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
            
            let game = { board : emptyBoard(), countdown : 0, playersArray : null }
            rooms[roomName] = game;

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
        socket.data.hasRolled = false;
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

        if ( socket.data.hasTurn && !socket.data.hasRolled ){

            let room = Array.from(socket.rooms)[1];
            let randomValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            socket.data.hasRolled = true;
            io.to(room).emit("diceRoll", randomValue, socket.data.username);

        }

    })

    socket.on("ready", function(){

    
        let room = Array.from(socket.rooms)[1];

        const players = io.sockets.adapter.rooms.get(room);

        rooms[room].playersArray = Array.from(players);
        

    if ( !socket.data.ready ){

    socket.data.ready = true;

        if ( io.sockets.adapter.rooms.get(room).size >= 1 ){
        

            for ( x of rooms[room].playersArray ){

                if ( !io.sockets.sockets.get(x).data.ready ){
                    return;
                }

            }

            io.to(room).emit("gameStart");

            io.sockets.sockets.get(rooms[room].playersArray[0]).data.hasTurn = 1;

            let currentPlayer = 0;

            setInterval(function() {
                
                rooms[room].countdown = rooms[room].countdown + 1;

                //console.log("Count : " + rooms[room].countdown);
                if ( !(rooms[room].countdown % 60) ){

                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = false;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasRolled = false;
                    currentPlayer++;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = true;
                    socket.emit("playerHasTurn", io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username);
                    console.log("Turn for : " + io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username + " in room " + room);
                }


            } , 50);

        }
    }    

        

    })

    socket.on('disconnect', function(){

        console.log("User disconnected");

    })


} )