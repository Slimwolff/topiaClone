import Room from "../logic/game.js"

const ROOMS = {
    $: []
}

// Create game room to host the match
function gameRoom(socket) {
    
    socket.on('newHost', ()=> {
        let r = new Room(12456,'playerId')
        ROOMS.$.push(r)
        console.log(ROOMS);
        console.log(ROOMS.$);

        ROOMS.$[0].startGame()

        console.log(ROOMS.$[0]);

    })

}

export default {
    gameRoom
}