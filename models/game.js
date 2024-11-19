class Match {
    constructor(gameID, players, map ) {
        this.id = gameID
        this.players = players
        this.map = map
        this.gameWinner = ""
    }

    // return array that contains tile info for all players
    // arr must be used by Game Events
    gameState() {

        let mapUpdate = []

        for(let i = 0; i < this.players.length; i++) {
            mapUpdate[i] = []
            for(let m = 0; this.map.tile.length; m++) {
                if(this.map.tile[m].visibility.includes(this.players[i])) {
                    mapUpdate[i].push(this.map.tile[m])
                }
            }
        }
        return mapUpdate
    }

    
    start() {
        this.map.buildMap()
    }
}

class Map {
    constructor(seed, mapGrid) {
        this.seed = seed == undefined ? null : seed;
        this.mapGrid = mapGrid;
        this.tile = [];
    }

    buildMap() {
        for(let x = 0; x < this.mapGrid; x++) {
            this.tile[x] = []
            for (let y = 0; y < this.mapGrid; y++) {
                this.tile[x][y] = new MapTile();
            }
        }
    }

    moveUnit() {

    }

    deleteUnit() {

    }

    newBuilding() {

    }
    demolishBuilding() {

    }
}

class MapTile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.terrain = "";
        this.unit = [];
        this.building = [];
        this.owner = ""
        this.visibility = [];
    }

    addBuilding() {

    }
    
    removeBuilding() {

    }

    addUnit() {

    }
    removeUnit() {

    }
}


export default class Room {
    constructor(id, owner) {
        this.id = id;
        this.users = [owner]; //change players to user because player has logic to game match
        this.owner = owner;
        this.mapDetails = {};
        this.private = false;
        this.password = null;
        this.match = {}
    }

    addUser(userId) { //change players to user because player has logic to game match
        if(!this.users.includes(userId)){
            this.users.push(userId)
        }
    }
    defineRules() {

    }
    startGame() {
        //verify if all users are ready
        let allReady = this.users.every(u => u.ready == true)
        if(allReady){
            this.match = new Match('uuid',this.users,new Map(12345,16));
            // change match to call buildMap in new Match
            console.log(this.match);
        }else {
            throw new Error("users not ready yet!")
        }

        
    }
}

 