class Match {
    constructor(gameID, players, map ) {
        this.id = gameID
        this.players = players
        this.map = map
        this.gameWinner = ""
    }

    gameState(playerId) {

    }

    
    async start() {
        
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
