class Building {
    constructor() {
        this.level = 1;
        this.population = 0;
        this.maxPopulation = 2
        this.range = 3;
    }

    levelUp() {
        this.range += 1;
        this.level += 1;
        this.maxPopulation += 1;
    }
    generateUnit() {

    }
}