import Magician from "../Magician";
import Daemon from "../Daemon";

test("Magician, this.stoned = false", () => {
    const ivan = new Magician();
    ivan.distance = 3;

  expect(ivan.getAttack).toBe(80);
});

test('Daemon, this.stoned = true', () => {
    const oleg = new Daemon();
    oleg.distance = 4;
    oleg.setStoned = true;

  expect(oleg.getAttack).toBe(60);
});

test('Magician, stonedGet() - false', () => {
    const olga = new Magician();

  expect(olga.getStoned).toBe(false);
});

// attackSet
test('Daemon, attackGet() - 25', () => {
    const igor = new Daemon();
    igor.distance = 4;
    igor.setAttack = 50;
    igor.setStoned = true;

  expect(igor.getAttack).toBe(25);
});