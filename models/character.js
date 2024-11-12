class Character {
    constructor(stats) {
        this.type = stats.type;
        this.health = stats.health;
        this.atk = stats.atk;
        this.range = stats.range
        this.movTile = stats.movtile
        this.x = 0;
        this.y = 0;
    }

    move(x,y) {
        this.x = x;
        this.y = y;
    }

    atk() {
        
    }

    receiveAtk(enemyAtk) {
        //decrease health of character
        this.health -= enemyAtk

        // if health reach 0 or below units dies -> destroy unit method
        if(this.health <= 0) {
            this.destroyUnit()
        }
    }

    destroyUnit() {

    }

}


let ARCHER = {
    type: 'archer',
    health: 10,
    atk: 3,
    range: 5,
    movtile: 3
}

export default {
    ARCHER,
    Character
} 