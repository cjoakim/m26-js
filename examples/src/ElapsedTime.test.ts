import {
    ElapsedTime
} from "m26-js";
  
test("ElapsedTime: constructor with a number of seconds", () => {
    let et = new ElapsedTime(' 3675 ');
    expect(et.arg).toBe('3675');
    expect(et.asHHMMSS()).toBe('01:01:15');
    expect(et.hh).toBe(1);
    expect(et.mm).toBe(1);
    expect(et.ss).toBe(15);
    expect(et.secs).toBe(3675);
});

test("ElapsedTime: constructor with a hh:mm:ss string", () => {
    let et = new ElapsedTime('1:1:15');
    expect(et.arg).toBe('1:1:15');
    expect(et.asHHMMSS()).toBe('01:01:15');
    expect(et.hh).toBe(1);
    expect(et.mm).toBe(1);
    expect(et.ss).toBe(15);
    expect(et.secs).toBe(3675);
});

test("ElapsedTime: constructor with a mm:ss string", () => {
    let et = new ElapsedTime('42:01');
    expect(et.arg).toBe('42:01');
    expect(et.asHHMMSS()).toBe('00:42:01');
    expect(et.hh).toBe(0);
    expect(et.mm).toBe(42);
    expect(et.ss).toBe(1);
    expect(et.secs).toBe((42 * 60) + 1);
});

test("ElapsedTime: constructor with a ss string", () => {
    let et = new ElapsedTime('59');
    expect(et.arg).toBe('59');
    expect(et.asHHMMSS()).toBe('00:00:59');
    expect(et.hh).toBe(0);
    expect(et.mm).toBe(0);
    expect(et.ss).toBe(59);
    expect(et.secs).toBe(59);
});

test("ElapsedTime: constructor with an empty string", () => {
    let et = new ElapsedTime('');
    expect(et.arg).toBe('');
    expect(et.asHHMMSS()).toBe('00:00:00');
    expect(et.hh).toBe(0);
    expect(et.mm).toBe(0);
    expect(et.ss).toBe(0);
    expect(et.secs).toBe(0);
});

test("ElapsedTime: constructor with a malformed string", () => {
    // garbage-in, garbage-out
    let et = new ElapsedTime('?what!');
    expect(et.arg).toBe('?what!');
    expect(et.asHHMMSS()).toBe('NaN:NaN:NaN');
});
