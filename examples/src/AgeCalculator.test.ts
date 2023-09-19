import {
    Age,
    AgeCalculator
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

test("AgeCalculator: calculate", () => {
    let ac : AgeCalculator = new AgeCalculator();
    let age1 : Age = ac.calculate('1960-10-01', '2014-10-01');
    let age2 : Age = ac.calculate('2001-09-11', '2023-09-17');
    
    expect(age1.value).toBeCloseTo(53.998631074606436, 0.00001);
    expect(age2.value).toBeCloseTo(22.015058179329227, 0.00001);
});
