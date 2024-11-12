export default class Player {
    constructor(id, name) {
        this.userProfile
        this.id = id;
        this.name = name;
        this.units = []
        this.buildings = []
        this.totalUnit = 0;
        this.diplomacy = 0
        this.resources = {
            coin: 2
        }
    }
}