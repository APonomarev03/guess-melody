import {assert} from "chai";
import {createTimer} from "../modules/timer";

describe(`Check timer changer`, () => {
  it(`should tickCallback timer and getter time`, () => {
    let tickCalls = 0;
    const timer = createTimer(10, () => tickCalls++, () => () => {});
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(timer.time, 7);
    assert.equal(tickCalls, 3);
  });
  it(`should endCallback timer and getter time`, () => {
    let endCalls = 0;
    const timer = createTimer(3, () => {}, () => endCalls++);
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(timer.time, 0);
    assert.equal(endCalls, 1);
  });
});
