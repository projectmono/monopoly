//import {board} from './board';

const { Console } = require("console");
const app = require("express")();
const httpServer = require("http").createServer(app);

options={
    cors:true,
    origins:["http://127.0.0.1:3000"],
   }

const io = require("socket.io")(httpServer, options);

const port = process.env.port || 2003;

httpServer.listen(port, function(){ console.log("Server has started on port : " + {port}.port)});

// Code from Socket.io official documentation ends here

const {createRoom, joinRoom} = require('./rooms');
const {board} = require('./board');


io.on('connection', function(socket){


    let rooms = {};

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
            
            let roomBoard = {...board};

            let game = { board : roomBoard, countdown : 0, playersArray : null }
            rooms[roomName] = game;

            let playersMap = {}
            let player = { position : socket.data.position, money : socket.data.money };

            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })

            socket.emit("board", board);
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

            let roomBoard = {...board};

            let game = { board : roomBoard, countdown : 0, playersArray : null }
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


    // Dice roll
    socket.on("rollDice", function(playerName){

        if ( socket.data.hasTurn && !socket.data.hasRolled ){

            let room = Array.from(socket.rooms)[1];
            let randomValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            socket.data.position = ( socket.data.position + randomValue ) % 40;
            socket.data.hasRolled = true;
            io.to(room).emit("diceRoll", randomValue, socket.data.username);

        }

    })


    // Ready to play
    socket.on("ready", function(){

    
        let room = Array.from(socket.rooms)[1];

        const players = io.sockets.adapter.rooms.get(room);

        rooms[room].playersArray = Array.from(players);
        

    if ( !socket.data.ready ){

    socket.data.ready = true;

        if ( io.sockets.adapter.rooms.get(room).size >= 2 ){
        

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

                if ( !(rooms[room].countdown % 60) ){

                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = false;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasRolled = false;
                    currentPlayer++;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = true;
                    socket.emit("playerHasTurn", io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username);
                    //console.log("Turn for : " + io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username + " in room " + room);
                }


            } , 1000);

        }
    }    

        

    })

    socket.on('buy', () => {

        let position = socket.data.position;

        let room = Array.from(socket.rooms)[1];

        // Si ce n'est pas un bien achetable
        if ( rooms[room].board.territories[position].type != "property" ){

            console.log("Not a property");
            return;

        }

        // Si la propriété a été déjà achetée
        if ( rooms[room].board.territories[position].ownedBy != null  ){

            console.log("Already been bought");
            return;

        }

        // Si le joueur n'a pas assez d'argent
        if ( socket.data.money < rooms[room].board.territories[position].price ){

            console.log("Not enough funds");
            return;

        }


        socket.data.money = socket.data.money - rooms[room].board.territories[position].price;
        rooms[room].board.territories[position].ownedBy = socket.data.username;
        socket.emit("propertyBought", socket.data.money, rooms[room].board);

    })


    // Un joueur veut construire une propriété
    socket.on("buildEvent", function(){

        let position = socket.data.position;

        let room = Array.from(socket.rooms)[1];
        
        // If the player does not or cannot own the property or is not allowed to build yet
        for ( x of rooms[room].board.territories[position].groupe ){

            if ( rooms[room].board.territories[x].ownedBy != socket.data.username ){

                console.log("Cannot build on this territory");
                return;

            }

        }

        // Check if player has enough money
        if ( socket.data.money < rooms[room].board.territories[position].housecost ){

            console.log("Not enough money");
            return;

        }
        
        // Building the correct kind of property 
        if ( rooms[room].board.territories[position].houses == 4 ){

            socket.data.money = socket.data.money - rooms[room].board.territories[position].housecost;
            rooms[room].board.territories[position].houses = 0; 
            rooms[room].board.territories[position].hotels = 1;
            
        }
        else {

            socket.data.money = socket.data.money - rooms[room].board.territories[position].housecost;
            rooms[room].board.territories[position].houses = rooms[room].board.territories[position].houses + 1 ; 

        }

        socket.emit("builtProperty", socket.data.money,rooms[room].board);

        // What's keeping the player from building a lot of hotels ? Like, a LOT.


    })

    socket.on('disconnect', function(){

        console.log("User disconnected");

    })


} )