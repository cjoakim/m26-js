import {
    RunWalkCalculation,
    RunWalkCalculator,
} from "m26-js";
  
// Override the (odd) behavior of the Jest 'toBeCloseTo' method.
// See https://stackoverflow.com/questions/50896753/jest-tobeclosetos-precision-not-working-as-expected
expect.extend({
    toBeCloseTo(received: number, expected: number, precision: number) {
      const pass = Math.abs(received - expected) < precision;
      return {
        pass,
        message: () =>
          `expected ${received} to be close to ${expected} with precision ${precision}`,
      };
    },
});

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
