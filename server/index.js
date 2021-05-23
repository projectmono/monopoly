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
        socket.data.hasRolled = false;
        socket.data.hasLost = false;
        socket.data.jailCountdown = 0;
        socket.data.username = userName;
        socket.data.position = 0;
        socket.data.money = 1500;

        roomNameOk =  createRoom(io ,socket, roomName)
        
        callback({

            roomNameOk : roomNameOk

        })

        if ( roomNameOk[0] ){
            
            let roomBoard = {...board};

            let game = { board : roomBoard, countdown : 0, playersArray : null}
            rooms[roomName] = game;

            let playersMap = {}
            let player = { position : socket.data.position, money : socket.data.money, hasLost : false, jailCountdown : 0};

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
        socket.data.hasLost = false;
        socket.data.jailCountdown = 0;
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
            let player = { position : socket.data.position, money : socket.data.money, hasLost : false, jailCountdown : 0 };
            const players = io.sockets.adapter.rooms.get(roomName);
            players.forEach(x => { 
                
                playersMap[io.sockets.sockets.get(x).data.username] = player
            
            })
            io.to(roomName).emit("playerJoined", playersMap)

        }

    })


    // Dice roll
    socket.on("rollDice", function(playerName){

        let room = Array.from(socket.rooms)[1];
        const players = io.sockets.adapter.rooms.get(room);
        if ( socket.data.hasTurn && !socket.data.hasRolled && socket.data.jailCountdown == 0){

            // Updating position
            let randomValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

            // Maybe getting cash
            if ( socket.data.position > (( socket.data.position + randomValue ) % 40) ){

                socket.data.money = socket.data.money + 200;

            }

            socket.data.position = ( socket.data.position + randomValue ) % 40;
            socket.data.hasRolled = true;
            io.to(room).emit("diceRoll", randomValue, socket.data.username, socket.data.money);

            // New position obligation
            if ( rooms[room].board.territories[socket.data.position].type == "property" ){

                // Check if it is owned by anybody
                if ( rooms[room].board.territories[socket.data.position].ownedBy && rooms[room].board.territories[socket.data.position].ownedBy != socket.data.username ){
                   console.log("i get here\n"); players.forEach(x => {

                        if ( io.sockets.sockets.get(x).data.username == rooms[room].board.territories[socket.data.position].ownedBy){

                            if ( rooms[room].board.territories[socket.data.position].houses ){

                                socket.data.money = socket.data.money - rooms[room].board.territories[socket.data.position].multipliedRent[rooms[room].board.territories[socket.data.position].houses - 1];
                                io.sockets.sockets.get(x).data.money = io.sockets.sockets.get(x).data.money + rooms[room].board.territories[socket.data.position].multipliedRent[rooms[room].board.territories[socket.data.position].houses - 1];

                            }
                            else if ( rooms[room].board.territories[socket.data.position].hotels ){

                                socket.data.money = socket.data.money - rooms[room].board.territories[socket.data.position].multipliedRent[4];
                                io.sockets.sockets.get(x).data.money = io.sockets.sockets.get(x).data.money + rooms[room].board.territories[socket.data.position].multipliedRent[4];

                            }
                            else{

                                io.sockets.sockets.get(x).data.money = io.sockets.sockets.get(x).data.money + rooms[room].board.territories[socket.data.position].rent
                                socket.data.money = socket.data.money - rooms[room].board.territories[socket.data.position].rent
                                
                            }

                            console.log("Player paid rent");
                            io.to(room).emit("rentPaid", io.sockets.sockets.get(x).data.username, io.sockets.sockets.get(x).data.money, socket.data.username, socket.data.money);

                        }

                    })
                    

                }

            }

            console.log(socket.data.position);
            if ( rooms[room].board.territories[socket.data.position].type == "incomeTax" ){

                console.log("Player paid tax\n");
                socket.data.money = socket.data.money - 200;
                io.to(room).emit("taxPaid", socket.data.username, socket.data.money);

            } 

            if ( rooms[room].board.territories[socket.data.position].type == "communityChest" ){

                console.log("Community Chest");
                
            }

            if ( rooms[room].board.territories[socket.data.position].type == "chance" ){

                console.log("Chance");

            }

            if ( rooms[room].board.territories[socket.data.position].type == "electricCompany" ){

                console.log("Electric Company");

            }

            if ( rooms[room].board.territories[socket.data.position].type == "waterworks" ){

                console.log("Water Works");

            }

            if ( rooms[room].board.territories[socket.data.position].type == "goToJail"){

                socket.data.position = 10;
                socket.data.jailCountdown = 3;
                io.to(room).emit("wentToPrison", socket.data.username, socket.data.position, socket.data.jailCountdown );
                console.log("Player went to prison");

            }

        }
        else{

            console.log("Cannot move\n");
        }

    })


    // Ready to play
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
            rooms[room].gameOn = true;

            io.sockets.sockets.get(rooms[room].playersArray[0]).data.hasTurn = 1;

            let currentPlayer = 0;

            setInterval(function() {
                
                rooms[room].countdown = rooms[room].countdown + 1;

                if ( !(rooms[room].countdown % 60) ){
                    
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = false;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasRolled = false;
                    if(io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.jailCountdown){
                        io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.jailCountdown--;
                    }
                    currentPlayer++;
                    io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.hasTurn = true;
                    socket.emit("playerHasTurn", io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username);
                    console.log("Player has turn : " + io.sockets.sockets.get( rooms[room].playersArray[currentPlayer % io.sockets.adapter.rooms.get(room).size] ).data.username )
                }


            } , 100);

        }
    }    

        

    })

    socket.on('buy', () => {

        let position = socket.data.position;

        let room = Array.from(socket.rooms)[1];

        
        // Si ce n'est pas le tour du joueur
        if ( !socket.data.hasTurn ){

            console.log("Not your turn");
            return;

        }
        console.log(position);
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
        io.to(room).emit("propertyBought", socket.data.money, rooms[room].board, socket.data.username);

    })


    // Un joueur veut construire une propriété
    socket.on("buildEvent", function(){

        let position = socket.data.position;

        let room = Array.from(socket.rooms)[1];

        // Si ce n'est pas le tour du joueur
        if ( !socket.data.hasTurn ){

            console.log("Not your turn");
            return;

        }
        
        // If the player does not or cannot own the property or is not allowed to build yet

        /*for ( x of rooms[room].board.territories[position].groupe ){

            if ( rooms[room].board.territories[x].ownedBy != socket.data.username ){

                console.log("Cannot build on this territory");
                return;

            }

        }*/

        // Check if player has enough money
        if ( socket.data.money < rooms[room].board.territories[position].housecost ){

            console.log("Not enough money");
            return;

        }

        // If the player already has a hotel built
        if ( rooms[room].board.territories[position].hotels ){

            console.log("Already at maximum capacity");
            return;

        }
        
        // Building the correct kind of property 
        if ( rooms[room].board.territories[position].houses == 4 ){

            socket.data.money = socket.data.money - rooms[room].board.territories[position].housecost;
            rooms[room].board.territories[position].houses = 0; 
            rooms[room].board.territories[position].hotels = 1;
            console.log("Hotel Property Built");
        }
        else {

            socket.data.money = socket.data.money - rooms[room].board.territories[position].housecost;
            rooms[room].board.territories[position].houses = rooms[room].board.territories[position].houses + 1 ; 
            console.log("House property built");

        }

        
        socket.emit("builtProperty", socket.data.money,rooms[room].board);




    })

    socket.on('mortgageEvent', function(position){

        let room = Array.from(socket.rooms)[1];

        // Check if the property is owned by the player or not 
        if ( rooms[room].board.territories[position].ownedBy != socket.data.username ){

            console.log("Cannot mortgage this property, you don't own it or it's not ownable");
            return;

        }

        // If the property is already mortgaged
        if ( rooms[room].board.territories[position].isMortgaged ){

            console.log("Property is already mortgaged");
            return;

        }

        // Mortgaging
        rooms[room].board.territories[position].isMortgaged = true;
        socket.data.money = socket.data.money + rooms[room].board.territories[position].mortgageValue;

        // Emitting new state
        console.log("Property Mortgaged");
        io.to(room).emit("propertyMortgaged", socket.data.money, rooms[room].board);
        

    })

    socket.on("demortgageEvent", function(position){

        // Get the room
        let room = Array.from(socket.rooms)[1];

        // Check if the property is owned by the player or not 
        if ( rooms[room].board.territories[position].ownedBy != socket.data.username ){

            console.log("Cannot demortgage this property, you don't own it or it's not ownable");
            return;

        }

        // If the property is not mortgaged
        if ( !(rooms[room].board.territories[position].isMortgaged) ){

            console.log("Property is not mortgaged");
            return;

        }

        // Check if player has enough money
        if ( rooms[room].board.territories[position].mortgageValue > socket.data.money  ){

            console.log("You don't have enough money");
            return;

        }

        // Mortgaging
        rooms[room].board.territories[position].isMortgaged = false;
        socket.data.money = socket.data.money - rooms[room].board.territories[position].mortgageValue;

        // Emitting new data
        console.log("Property Demortgaged");
        io.to(room).emit("propertyDemortgaged", socket.data.money, rooms[room].board);


    })

    socket.on('disconnecting', function(){

        // Get the room
        let room = Array.from(socket.rooms)[1];

        // Recreate players map and emit it to all
        let playersMap = {}
            const players = io.sockets.adapter.rooms.get(room);
            let player = { };
            players.forEach(x => { 
                
                if ( socket.id != x ){
                    console.log("I get here\n");
                    player.position = io.sockets.sockets.get(x).data.position;
                    player.money = io.sockets.sockets.get(x).data.money;
                    player.hasLost = io.sockets.sockets.get(x).data.hasLost;
                    player.jailCountdown = io.sockets.sockets.get(x).data.jailCountdown
                    playersMap[io.sockets.sockets.get(x).data.username] = player
                }
            
            })

            let index = rooms[room].playersArray.indexOf(socket.id);
            rooms[room].playersArray.splice(index, 1);
            console.log("Player has quit");


            io.to(room).emit("playerJoined", playersMap)

    })

    socket.on('disconnect', function(){

        console.log("User disconnected");

    })


} )