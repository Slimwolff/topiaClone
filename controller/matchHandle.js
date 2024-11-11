const gameRoom = {
    count: 1
}

function gameController(socket) {

    console.log("connected to socket.io");
    

    socket.on('action', (a)=> {
        gameRoom['count'] += 1
        console.log(a)
        console.log(gameRoom);
    })
}

export default gameController;