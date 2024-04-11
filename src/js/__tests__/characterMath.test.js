import Magician from "../Magician";
import Daemon from "../Daemon";

test("Magician, this.stoned = false", () => {
    const ivan = new Magician();
    ivan.distance = 3;

  expect(ivan.attackGet()).toBe(80);
});

test('Daemon, this.stoned = true', () => {
    const oleg = new Daemon();
    oleg.distance = 4;
    oleg.stonedSet(true);

  expect(oleg.attackGet()).toBe(60);
});

test('Magician, stonedGet() - false', () => {
    const olga = new Magician();

  expect(olga.stonedGet()).toBe(false);
});

// attackSet
test('Daemon, attackGet() - 25', () => {
    const igor = new Daemon();
    igor.distance = 4;
    igor.attackSet(50);
    igor.stonedSet(true);

  expect(igor.attackGet()).toBe(25);
});