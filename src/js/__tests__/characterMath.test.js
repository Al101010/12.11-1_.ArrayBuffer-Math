import Magician from "../Magician";
import Daemon from "../Daemon";

test("Magician, this.stoned = false", () => {
    const ivan = new Magician();
    ivan.distance = 3;

  expect(ivan.attack).toBe(80);
});

test('Daemon, this.stoned = true', () => {
    const oleg = new Daemon();
    oleg.distance = 4;
    oleg.stoned = true;

  expect(oleg.attack).toBe(60);
});

test('Magician, stonedGet() - false', () => {
    const olga = new Magician();

  expect(olga.stoned).toBe(false);
});

test('Daemon, attackGet() - 25', () => {
    const igor = new Daemon();
    igor.distance = 4;
    igor.attack = 50;
    igor.stoned = true;

  expect(igor.attack).toBe(25);
});