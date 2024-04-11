export default class characterMath {
    constructor() {
        this.stoned = false;
        this.distance = 1;
    }

    stonedSet(value) {
        this.stoned = value;
    }

    stonedGet() {
        return this.stoned;
    }

    attackSet(power) {
        this.attack = power;
    }

    attackGet() {
        const getAttack = this.attack - (this.distance - 1) * (this.attack * 0.1); // attack - Math.log2(x) * 5

        if (this.stoned) {
            return Math.round(getAttack - Math.log2(this.distance) * 5);
        }

        return getAttack;
    }
}