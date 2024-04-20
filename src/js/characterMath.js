export default class characterMath {
    constructor() {
        this.stoned = false;
        this.distance = 1;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(power) {
        this._attack = power;
    }

    get attack() {
        const getAttack = this._attack - (this.distance - 1) * (this._attack * 0.1); // attack - Math.log2(x) * 5

        if (this.stoned) {
            return Math.round(getAttack - Math.log2(this.distance) * 5);
        }

        return getAttack;
    }
}