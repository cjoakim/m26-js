
import util from "util";

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

// This module provides example use of the m26-js package, and
// also helps generate documentation content for the README.md

console.log('');
console.log('---');
console.log('');
console.log('## The Age class');
let a42 : Age = new Age(42.4449);
let a55 : Age = new Age(55.0);
let adiff : number = a55.subtract(a42);
let asum  : number = a55.add(a42);
console.log('');
console.log('```');
console.log(util.format('a42.value: %s', a42.value));
console.log(util.format('a42.maxPulse: %s', a42.maxPulse()));
console.log(util.format("a42.trainingZones:  // returns a 5-element Array of TrainingZone objects\n%s\n", JSON.stringify(a42.trainingZones(), undefined, 4)));
console.log(util.format('adiff: %s', adiff));
console.log(util.format('asum:  %s', asum));
console.log('```');

console.log('');
console.log('## The AgeCalculator class');
console.log('');
let ac : AgeCalculator = new AgeCalculator();
let a : Age = ac.calculate('2001-09-11', '2023-09-19');

console.log('```');
console.log(util.format('age: %s', a.value));
console.log('```');

console.log('');
console.log('## The Constants class');
console.log('');
console.log('See the unit tests shown here:')
console.log("```");
console.log("```");

console.log('');
console.log('## The Distance class');

console.log('');
console.log('```');
console.log('```');

console.log('');
console.log('## The ElapsedTime class');

console.log('');
console.log('```');
console.log('```');

console.log('');
console.log('## The Speed class');

console.log('');
console.log('```');
console.log('```');

console.log('');
console.log('## The RunWalkCalculator class');

console.log('');
console.log('```');
console.log('```');
