import Magician from "../Magician";
import Daemon from "../Daemon";

test("Magician, this.stoned = false", () => {
    const ivan = new Magician();
    ivan.distance = 3;

  expect(ivan.Attack).toBe(80);
});

test('Daemon, this.stoned = true', () => {
    const oleg = new Daemon();
    oleg.distance = 4;
    oleg.Stoned = true;

  expect(oleg.Attack).toBe(60);
});

test('Magician, stonedGet() - false', () => {
    const olga = new Magician();

  expect(olga.Stoned).toBe(false);
});

// attackSet
test('Daemon, attackGet() - 25', () => {
    const igor = new Daemon();
    igor.distance = 4;
    igor.Attack = 50;
    igor.Stoned = true;

  expect(igor.Attack).toBe(25);
});