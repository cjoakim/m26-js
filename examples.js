
/*
This purpose of this file is to test the generated m26.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
 */

(function() {
  var a0, a1, a2, a20, a21, a57, d, d1, d2, d3, d4, d5, m26, miles, result, run_hhmmss, run_ppm, s, s2, t, t1, t2, walk_hhmmss, walk_ppm, zones;

  m26 = require("./lib/m26.js");

  console.log('');

  console.log('### Examples');

  console.log('');

  console.log('#### Setup');

  console.log('');

  console.log('Add m26-js to your project or package.json file:');

  console.log('```');

  console.log('npm install m26-js');

  console.log('```');

  console.log('');

  console.log('Require m26-js in your code:');

  console.log('```');

  console.log('m26 = require("m26-js")');

  console.log('```');

  console.log('');

  console.log('Note: this library is implemented with CoffeeScript, and these examples are also in CoffeeScript.');

  console.log('');

  console.log('#### Constants');

  console.log('');

  console.log('m26-js defines the following:');

  console.log('```');

  console.log('m26.Constants.VERSION:             ' + m26.Constants.VERSION);

  console.log('m26.Constants.UOM_MILES:           ' + m26.Constants.UOM_MILES);

  console.log('m26.Constants.UOM_KILOMETERS:      ' + m26.Constants.UOM_KILOMETERS);

  console.log('m26.Constants.UOM_YARDS:           ' + m26.Constants.UOM_YARDS);

  console.log('m26.Constants.UNITS_OF_MEASURE:    ' + JSON.stringify(m26.Constants.UNITS_OF_MEASURE));

  console.log('m26.Constants.KILOMETERS_PER_MILE: ' + m26.Constants.KILOMETERS_PER_MILE);

  console.log('m26.Constants.YARDS_PER_MILE:      ' + m26.Constants.YARDS_PER_MILE);

  console.log('m26.Constants.MILES_PER_KILOMETER: ' + m26.Constants.MILES_PER_KILOMETER);

  console.log('m26.Constants.YARDS_PER_KILOMETER: ' + m26.Constants.YARDS_PER_KILOMETER);

  console.log('m26.Constants.SECONDS_PER_HOUR:    ' + m26.Constants.SECONDS_PER_HOUR);

  console.log('```');

  console.log('');

  console.log('#### Age');

  console.log('');

  console.log('Construct an Age from either a Number or String value.');

  console.log('');

  console.log('Methods val(), max_pulse(), add(), subtract() and training_zones() are available.');

  console.log('Max-pulse and training-zones are based on the widely known "220 - age" formula.');

  a20 = new m26.Age(20.2);

  a21 = new m26.Age(21);

  a57 = new m26.Age("57.1");

  console.log('```');

  console.log('a20 = new m26.Age(20.2)');

  console.log('a21 = new m26.Age(21)');

  console.log('a57 = new m26.Age("57.1")');

  console.log('a20.val()  ->  ' + a20.val());

  console.log('a21.val()  ->  ' + a21.val());

  console.log('a57.val()  ->  ' + a57.val());

  console.log('a20.max_pulse()   ->  ' + a20.max_pulse());

  console.log('a21.max_pulse()   ->  ' + a21.max_pulse());

  console.log('a57.max_pulse()   ->  ' + a57.max_pulse());

  console.log('a57.add(a20)      ->  ' + a57.add(a20));

  console.log('a57.subtract(a20) ->  ' + a57.subtract(a20));

  console.log('');

  zones = a57.training_zones();

  console.log('zones = a57.training_zones()');

  console.log('JSON.stringify(zones) -> ' + JSON.stringify(zones));

  console.log('```');

  console.log('');

  console.log('#### AgeCalculator');

  console.log('');

  console.log('Calculate and return an Age object, given a birth date, and optional as-of date.');

  console.log('');

  a0 = m26.AgeCalculator.calculate("2014-10-01", "2014-11-01");

  a1 = m26.AgeCalculator.calculate("1960-10-01", "2014-11-01");

  console.log('```');

  console.log('a0 = m26.AgeCalculator.calculate("2014-10-01", "2014-11-01")');

  console.log('a1 = m26.AgeCalculator.calculate("1960-10-01", "2014-10-01")');

  console.log('a0.val()  ->  ' + a0.val());

  console.log('a1.val()  ->  ' + a1.val());

  console.log('```');

  console.log('');

  console.log('#### Distance');

  console.log('');

  console.log('The default unit-of-measure is miles ("m"), but "k" or "y" may also be specified.');

  console.log('');

  console.log('Methods uom(), as_miles(), as_kilometers(), as_yards(), add(), and subtract() are available.');

  console.log('```');

  d1 = new m26.Distance(26.2);

  console.log('d1 = new m26.Distance(26.2)');

  console.log('d1.uom()           -> ' + d1.uom());

  console.log('d1.as_miles()      -> ' + d1.as_miles());

  console.log('d1.as_kilometers() -> ' + d1.as_kilometers());

  console.log('d1.as_yards()      -> ' + d1.as_yards());

  console.log('```');

  console.log('');

  console.log('Distances can be constructed from other units, and added and subtracted.');

  d2 = new m26.Distance(4.8);

  d3 = new m26.Distance(10.0, "k");

  d4 = d1.subtract(d3);

  d5 = d1.add(d2);

  console.log('```');

  console.log('d2 = new m26.Distance(4.8)');

  console.log('d3 = new m26.Distance(10.0, "k")');

  console.log('d4 = d1.subtract(d3)');

  console.log('d5 = d1.add(d2)');

  console.log('d4.as_miles()      -> ' + d4.as_miles());

  console.log('d5.as_miles()      -> ' + d5.as_miles());

  console.log('```');

  console.log('#### ElapsedTime');

  console.log('');

  console.log('ElapsedTime objects can be constructed from a Number of seconds, or "hh:mm:ss", "hh:mm", or "ss" String values.');

  console.log('');

  console.log('Methods as_hhmmss(), seconds(), and hours() are available.');

  console.log('```');

  t1 = new m26.ElapsedTime(3665);

  t2 = new m26.ElapsedTime("3:47:30");

  console.log('t1 = new m26.ElapsedTime(3665)');

  console.log('t1.as_hhmmss() -> ' + t1.as_hhmmss());

  console.log('t1.seconds()   -> ' + t1.seconds());

  console.log('t1.hours()     -> ' + t1.hours());

  console.log('');

  console.log('t2 = new m26.ElapsedTime("3:47:30")');

  console.log('t2.as_hhmmss() -> ' + t2.as_hhmmss());

  console.log('t2.seconds()   -> ' + t2.seconds());

  console.log('t2.hours()     -> ' + t2.hours());

  console.log('```');

  console.log('');

  console.log('#### Speed');

  console.log('');

  console.log('Calculate a Speed based on a given Distance and ElapsedTime.');

  console.log('');

  console.log('Methods mph(), kph(), yph(), seconds_per_mile(), pace_per_mile() and projected_time() are available.');

  console.log('```');

  d = new m26.Distance(50.0, "k");

  d2 = new m26.Distance(26.2);

  t = new m26.ElapsedTime("06:00:00");

  s = new m26.Speed(d, t);

  console.log('d2 = new m26.Distance(26.2)');

  console.log('d  = new m26.Distance(50.0, "k")');

  console.log('t  = new m26.ElapsedTime("06:00:00")');

  console.log('s  = new m26.Speed(d, t)');

  console.log('');

  console.log('s.mph()  -> ' + s.mph());

  console.log('s.kph()  -> ' + s.kph());

  console.log('s.yph()  -> ' + s.yph());

  console.log('');

  console.log('s.seconds_per_mile() -> ' + s.seconds_per_mile());

  console.log('s.pace_per_mile()    -> ' + s.pace_per_mile());

  console.log('');

  console.log('s.projected_time(d2)           -> ' + s.projected_time(d2));

  console.log('s.projected_time(d2, "simple") -> ' + s.projected_time(d2, "simple") + '  # simple linear formula');

  console.log('s.projected_time(d2, "riegel") -> ' + s.projected_time(d2, "riegel") + '  # exponential formula');

  console.log('');

  a1 = new m26.Age(42.5);

  a2 = new m26.Age(57.1);

  s2 = s.age_graded(a1, a2);

  console.log('a1 = new m26.Age(42.5)');

  console.log('a2 = new m26.Age(57.1)');

  console.log('s2 = s.age_graded(a1, a2)');

  console.log('s.mph()   -> ' + s.mph());

  console.log('s2.mph()  -> ' + s2.mph());

  console.log('```');

  console.log('');

  console.log('');

  console.log('#### RunWalkCalculator');

  console.log('');

  console.log('Calculate a mph and elapsed time for a projected distance and mix of run and walk durations and paces.');

  console.log('');

  run_hhmmss = '2:45';

  run_ppm = '9:15';

  walk_hhmmss = '0:45';

  walk_ppm = '18:00';

  miles = '31.0';

  result = m26.RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);

  console.log('```');

  console.log("run_hhmmss  = " + run_hhmmss);

  console.log("run_ppm     = " + run_ppm);

  console.log("walk_hhmmss = " + walk_hhmmss);

  console.log("walk_ppm    = " + walk_ppm);

  console.log("miles       = " + miles);

  console.log("result      = m26.RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles)");

  console.log("result object: ");

  console.log(JSON.stringify(result, null, 2));

  console.log('```');

  console.log('');

  console.log('');

}).call(this);
