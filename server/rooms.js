

function createRoom(io, socket, roomName) {

    const rooms = io.of("/").adapter.rooms;

    if ( rooms.has(roomName) ){
        
        console.log(`${socket.data.username} failed to create a room due to duplicate`)
        return [false, "Room already exists"];
        
    }

    socket.join(roomName);
    console.log(`${socket.data.username} has succefully created room ${roomName}`)
    return [true, "Redirecting"];
};


function joinRoom(io, socket, roomName){

    const rooms = io.of("/").adapter.rooms;

    if ( !rooms.has(roomName) ){
        
        console.log(`${socket.data.username} failed to join a room because it does not exist`)
        return [false, "Room does not exist"];
        
    }else if (io.sockets.adapter.rooms.get(roomName).size >= 5){

        console.log(`${socket.data.username} failed to join a room because it is full`)
        return [false, "Room is full"];

    }

    socket.join(roomName);
    console.log(`${socket.data.username} has succefully joined room ${roomName}`)
    return [true, "Redirecting"];


}

module.exports = {createRoom, joinRoom};