export default class characterMath {
    constructor() {
        this.stoned = false;
        this.distance = 1;
    }

    setStoned(value) {
        this.stoned = value;
    }

    getStoned() {
        return this.stoned;
    }

    setAttack(power) {
        this.attack = power;
    }

    getAttack() {
        const get_Attack = this.attack - (this.distance - 1) * (this.attack * 0.1); // attack - Math.log2(x) * 5

        if (this.stoned) {
            return Math.round(get_Attack - Math.log2(this.distance) * 5);
        }

        return get_Attack;
    }
}