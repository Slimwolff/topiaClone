import {Room, User} from "../models/index.js"

const ROOMS = []

const USER_SESSION = [];

// Create game room to host the match
function gameRoom(socket) {
    
    // Create new room to host
    socket.on('newHost', (a,)=> {
        console.log('newHost requested!!',a,b)
    })
    // Client search for active host server anwser list of rooms availabe
    socket.on('fetchHosts', () => {
        socket.emit('hostsAvailable', ROOMS)
    })

    // Client joins to target host if possible
    socket.on('joinRoom', (roomIndex,userSession) => {
        ROOMS[roomIndex].addUser(userId)
    })

}

export default {
    gameRoom
}