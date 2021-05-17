import io from 'socket.io-client'

const socket = io('localhost:2003');

export default socket;