import {
    Age,
    Distance,
    ElapsedTime,
    Speed
} from "m26-js";

test("Speed: property formats ss second values as nn.nn strings", () => {
    let d1  = new Distance(1.0);
    let et1 = new ElapsedTime('8:00');
    let s1  = new Speed(d1, et1);
    expect(s1.formattedSeconds(0)).toBe('00.00');
    expect(s1.formattedSeconds(1)).toBe('01.00');
    expect(s1.formattedSeconds(17.76)).toBe('17.76');
    expect(s1.formattedSeconds(59.90)).toBe('59.90');
    expect(s1.formattedSeconds(59.99)).toBe('59.99');
});

test("Speed: calculates a 2-mile walk, with round numbers", () => {
    let d1  = new Distance(2.0);
    let et1 = new ElapsedTime('30:00');
    let s1  = new Speed(d1, et1);
    expect(s1.secondsPerMile()).toBe(900);
    expect(s1.pacePerMile()).toBe('15:00.00');
});

test("Speed: calculates a marathon with fractional seconds pace", () => {
    let d1  = new Distance(26.2);
    let et1 = new ElapsedTime('3:47:30');
    let s1  = new Speed(d1, et1);
    expect(s1.secondsPerMile()).toBe(520.9923664122138);
    expect(s1.pacePerMile()).toBe('8:40.99');
});

test("Speed: project a time using simple linear formula", () => {
    let d1  = new Distance(10.0);
    let d2  = new Distance(20.0);
    let et1 = new ElapsedTime('1:30:00');
    let s1  = new Speed(d1, et1);
    expect(s1.secondsPerMile()).toBe(540.0);
    expect(s1.pacePerMile()).toBe('9:00.00');
    let hhmmss = s1.projectedTime(d2);
    expect(hhmmss).toBe('03:00:00');
});

test("Speed: project a time using the exponential riegel formula", () => {
    let d1  = new Distance(10.0);
    let d2  = new Distance(20.0);
    let et1 = new ElapsedTime('1:30:00');
    let s1  = new Speed(d1, et1);
    expect(s1.secondsPerMile()).toBe(540.0);
    expect(s1.pacePerMile()).toBe('9:00.00');
    let hhmmss = s1.projectedTime(d2, 'riegel');
    expect(hhmmss).toBe('03:07:38');
});

test("Speed: calculated age-graded speeds", () => {
    let d  = new Distance(26.2);
    let et = new ElapsedTime('3:47:30');
    let s1  = new Speed(d, et);
    let a1 = new Age(42.5);
    let a2 = new Age(43.5);
    let a3 = new Age(57.1);
    expect(s1.mph()).toBe(6.90989010989011);
    let s2 = s1.ageGraded(a1, a2);
    let s3 = s1.ageGraded(a1, a3);
    expect(s2.mph()).toBe(6.871129889997814);
    expect(s3.mph()).toBe(6.341693000739595);
});
