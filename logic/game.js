class Match {
    constructor(gameID, players, map ) {
        this.id = gameID
        this.players = players
        this.map = map
        this.gameWinner = ""
    }

    gameState(playerId) {

    }

    
    start() {
        
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
    constructor() {
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
        if(!this.players.includes(userId)){
            this.players.push(userId)
        }
        
    }
    defineRules() {

    }
    startGame() {
        this.match = new Match('uuid',this.users,new Map(12345,16));
        //change logic to create player instance
        //at startGame in Match class
        this.match.map.buildMap();
        console.log(this.match);
    }
}

 