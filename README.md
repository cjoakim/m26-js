## m26-js

### Purpose

A Node.js library for speed and pace calculations for sports like running,
swimming, and cycling.  Age-graded times and heart-rate training-zones are
also supported.


### Setup

Add m26-js to your project or package.json file:
```
npm install m26-js
```

### Examples

**This library is now implemented with TypeScript**, and these examples are also in **TypeScript**.

Import the m26-js classes into your TypeScript code:
```
import {
    Age,
    AgeCalculator,
    Constants,
    Distance,
    ElapsedTime,
    RunWalkCalculation,
    RunWalkCalculator,
    Speed,
    TrainingZone
} from "m26-js";
```

#### Class Constants

Class Constants defines the following:
```
  public static LIB_NAME         : string = 'm26-js';
  public static LIB_VERSION      : string = '1.0.0';
  public static LIB_AUTHOR       : string = 'Chris Joakim';
  public static LIB_LICENSE      : string = 'MIT';

  public static UOM_MILES        : string = 'm';
  public static UOM_KILOMETERS   : string = 'k';
  public static UOM_YARDS        : string = 'y';
  public static UNITS_OF_MEASURE : string[] = [
      Constants.UOM_MILES, Constants.UOM_KILOMETERS, Constants.UOM_YARDS];

  public static KILOMETERS_PER_MILE : number = 1.609344;
  public static MILES_PER_KILOMETER : number = 0.621371192237334;
  public static YARDS_PER_KILOMETER : number = 1093.6132983377076;
  public static FEET_PER_KILOMETER  : number = 3280.839895013123;
  public static FEET_PER_METER      : number = 3.280839895013123;
  public static YARDS_PER_MILE      : number = 1760.0;
  public static SECONDS_PER_MINUTE  : number = 60.0;
  public static SECONDS_PER_HOUR    : number = 3600.0;
```

The remaining code examples are in the form of working **unit tests**.

#### Class Age

```
test("Age: maxPulse", () => {
    let a19 = new Age(19.1);
    let a66 = new Age(66);
    expect(a19.value).toBe(19.1);
    expect(a66.value).toBe(66);
    expect(a19.maxPulse()).toBe(200);
    expect(a66.maxPulse()).toBe(220 - 66);
});

test("Age: add", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);
    a1.add(a2);
    expect(a1.value).toBe(85.1);
    expect(a2.value).toBe(66);
});

test("Age: subtract", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);
    a2.subtract(a1);
    expect(a1.value).toBe(19.1);
    expect(a2.value).toBe(66 - 19.1);
});

test("Age: maxPulse and trainingZones", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);

    expect(a1.maxPulse()).toBe(200);
    expect(a2.maxPulse()).toBe(154);
    expect(a2.maxPulse()).toBe(220 - 66);

    // first case; age 19.1
    let zones = a1.trainingZones();
    //console.log(zones);
    expect(zones.length).toBe(5);

    expect(zones[0].zone).toBe(1);
    expect(zones[0].pct).toBe(0.75);
    expect(zones[0].age).toBe(19.1);
    expect(zones[0].maxHeartRate).toBe(a1.maxPulse());
    expect(zones[0].zoneHeartRate).toBe(150);

    expect(zones[4].zone).toBe(5);
    expect(zones[4].pct).toBe(0.95);
    expect(zones[4].age).toBe(19.1);
    expect(zones[4].maxHeartRate).toBe(a1.maxPulse());
    expect(zones[4].zoneHeartRate).toBe(190);

    // second case; age 66
    zones = a2.trainingZones();
    //console.log(zones);
    expect(zones.length).toBe(5);

    expect(zones[0].zone).toBe(1);
    expect(zones[0].pct).toBe(0.75);
    expect(zones[0].age).toBe(66);
    expect(zones[0].maxHeartRate).toBe(a2.maxPulse());
    expect(zones[0].zoneHeartRate).toBe(116);

    expect(zones[4].zone).toBe(5);
    expect(zones[4].pct).toBe(0.95);
    expect(zones[4].age).toBe(66);
    expect(zones[4].maxHeartRate).toBe(a2.maxPulse());
    expect(zones[4].zoneHeartRate).toBe(146);
});
```

#### Class AgeCalculator

```
test("AgeCalculator: calculate", () => {
    let ac : AgeCalculator = new AgeCalculator();
    let age1 : Age = ac.calculate('1960-10-01', '2014-10-01');
    let age2 : Age = ac.calculate('2001-09-11', '2023-09-17');
    
    expect(age1.value).toBeCloseTo(53.998631074606436, 0.00001);
    expect(age2.value).toBeCloseTo(22.015058179329227, 0.00001);
});
```

#### Class Distance

```
test("Distance: constructor default uom", () => {
    let d = new Distance(26.2);
    expect(d.value).toBe(26.2);
    expect(d.uom).toBe(Constants.UOM_MILES);

    expect(d.asMiles()).toBe(26.2);
    expect(d.asKilometers()).toBe(42.1648128);
    expect(d.asYards()).toBe(46112.0);
});

test("Distance: constructor miles uom", () => {
    let d = new Distance(26.2, Constants.UOM_MILES);
    expect(d.value).toBe(26.2);
    expect(d.uom).toBe(Constants.UOM_MILES);

    expect(d.asMiles()).toBe(26.2);
    expect(d.asKilometers()).toBe(42.1648128);
    expect(d.asYards()).toBe(46112.0);
});

test("Distance: constructor kilometers uom", () => {
    let d = new Distance(10.0, Constants.UOM_KILOMETERS);
    expect(d.value).toBe(10.0);
    expect(d.uom).toBe(Constants.UOM_KILOMETERS);

    expect(d.asMiles()).toBe(6.2137119223733395);
    expect(d.asKilometers()).toBe(10.0);
    expect(d.asYards()).toBe(10936.132983377078);
});

test("Distance: constructor yards uom", () => {
    let d = new Distance(1800, Constants.UOM_YARDS);
    expect(d.value).toBe(1800);
    expect(d.uom).toBe(Constants.UOM_YARDS);

    expect(d.asMiles()).toBe(1.0227272727272727);
    expect(d.asKilometers()).toBe(1.64592);
    expect(d.asYards()).toBe(1800);
});

test("Distance: add", () => {
    let d1 = new Distance(26.2);
    let d2 = new Distance(4.8);
    let d3 = d1.add(d2);
    expect(d3.uom).toBe(Constants.UOM_MILES);
    expect(d3.asMiles()).toBe(31.0);
});

test("Distance: subtract", () => {
    let d1 = new Distance(26.2);
    let d2 = new Distance(10.0, 'k');
    let d3 = d1.subtract(d2);
    expect(d3.uom).toBe(Constants.UOM_MILES);
    expect(d3.asMiles()).toBe(19.98628807762666);
});
```

#### Class ElapsedTime

```
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
```

#### Class Speed

```
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
```

#### Class RunWalkCalculator

```
test("RunWalkCalculator: calculate with all walking, no running", () => {

    let calculator = new RunWalkCalculator()
    let run_hhmmss = '00:00';
    let run_ppm = '9:00';
    let walk_hhmmss = '10:00';
    let walk_ppm = '18:00';
    let miles = 3.333;

    let result : RunWalkCalculation =
        calculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);

    // inputs
    expect(result.runHhmmss).toBe(run_hhmmss);
    expect(result.runPpm).toBe(run_ppm);
    expect(result.walkHhmmss).toBe(walk_hhmmss);
    expect(result.walkPpm).toBe(walk_ppm);
    expect(result.miles).toBe(miles);

    // calculated
    expect(result.avgMph).toBeCloseTo(3.333333, 0.0001);
    expect(result.avgPpm).toBe('18:00.00');
    expect(result.projectedTime).toBe('00:59:59');
    expect(result.projectedMiles).toBeCloseTo(3.333, 0.001);
});

test("RunWalkCalculator: calculate with all running, no walking", () => {

    let calculator = new RunWalkCalculator()
    let run_hhmmss = '10:00';
    let run_ppm = '9:00';
    let walk_hhmmss = '0:00';
    let walk_ppm = '18:00';
    let miles = 3.333;

    let result : RunWalkCalculation =
        calculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);

    // inputs
    expect(result.runHhmmss).toBe(run_hhmmss);
    expect(result.runPpm).toBe(run_ppm);
    expect(result.walkHhmmss).toBe(walk_hhmmss);
    expect(result.walkPpm).toBe(walk_ppm);
    expect(result.miles).toBe(miles);

    // calculated
    expect(result.avgMph).toBeCloseTo(6.666666666666667, 0.00001);
    expect(result.avgPpm).toBe('9:00.00');
    expect(result.projectedTime).toBe('00:29:59');
    expect(result.projectedMiles).toBeCloseTo(3.333, 0.001);
});

test("RunWalkCalculator: calculate a marathon with a 9:1 ratio of running to walking", () => {

    let calculator = new RunWalkCalculator()
    let run_hhmmss = '9:00';
    let run_ppm = '9:00';
    let walk_hhmmss = '1:00';
    let walk_ppm = '18:00';
    let miles = 26.2;

    let result : RunWalkCalculation =
        calculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);

    // inputs
    expect(result.runHhmmss).toBe(run_hhmmss);
    expect(result.runPpm).toBe(run_ppm);
    expect(result.walkHhmmss).toBe(walk_hhmmss);
    expect(result.walkPpm).toBe(walk_ppm);
    expect(result.miles).toBe(miles);

    // calculated
    expect(result.avgMph).toBeCloseTo(6.060606, 0.000001);
    expect(result.avgPpm).toBe('9:54.00');
    expect(result.projectedTime).toBe('04:19:22');
    expect(result.projectedMiles).toBeCloseTo(26.2, 0.001);
});
```

---

### Release History

* 2023-09-19 - 1.0.0 - Re-implemented with TypeScript.
* 2015-08-04 - 0.4.0 - Added class RunWalkCalculator, and ported the project back to CoffeeScript.
* 2015-05-13 - 0.3.2 - Repackaged again, from a single merged m26-js.ts file. Tests enhanced.
* 2015-05-12 - 0.3.1 - Renamed lib from m26.js to m26-js.js, etc, and repackaged.
* 2015-05-12 - 0.3.0 - Project ported from CoffeeScript to Typescript, with m26.d.ts typings file.
* 2014-11-09 - 0.2.0 - Corrected the English-to-Metric and Metric-to-English conversions.
* 2014-11-06 - 0.1.5 - Fix require statement in examples documentation.
* 2014-11-05 - 0.1.4 - Removed a spec_helper function.
* 2014-11-02 - 0.1.3 - Added Age.training_zones()
* 2014-11-01 - 0.1.2 - Added Speed.age_graded()
* 2014-11-01 - 0.1.1 - Added Speed.projected_time(), Age, AgeCalculator.
* 2014-11-01 - 0.1.0 - Initial working version.
* 2014-11-01 - 0.0.3 - alpha 3
* 2014-11-01 - 0.0.2 - alpha 2
* 2014-11-01 - 0.0.1 - alpha 1
