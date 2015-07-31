
/*
This purpose of this file is to test the generated m26.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2015, Christopher Joakim, <christopher.joakim@gmail.com>
 */

(function() {
  var Age, AgeCalculator, Constants, Distance, ElapsedTime, Speed, a0, a1, a2, a20, a21, a57, c, d, d1, d2, d3, d4, d5, m26, root, s, s2, t, t1, t2, zones,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  m26 = require("./lib/m26-js.js");

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

  console.log('Note: this library is now implemented with TypeScript, but these examples are in CoffeeScript.');

  console.log('');

  console.log('#### Constants');

  console.log('');

  console.log('m26-js defines the following:');

  console.log('```');

  console.log('m26.M26Constants.VERSION:             ' + m26.M26Constants.VERSION);

  console.log('m26.M26Constants.UOM_MILES:           ' + m26.M26Constants.UOM_MILES);

  console.log('m26.M26Constants.UOM_KILOMETERS:      ' + m26.M26Constants.UOM_KILOMETERS);

  console.log('m26.M26Constants.UOM_YARDS:           ' + m26.M26Constants.UOM_YARDS);

  console.log('m26.M26Constants.UNITS_OF_MEASURE:    ' + JSON.stringify(m26.M26Constants.UNITS_OF_MEASURE));

  console.log('m26.M26Constants.KILOMETERS_PER_MILE: ' + m26.M26Constants.KILOMETERS_PER_MILE);

  console.log('m26.M26Constants.YARDS_PER_MILE:      ' + m26.M26Constants.YARDS_PER_MILE);

  console.log('m26.M26Constants.MILES_PER_KILOMETER: ' + m26.M26Constants.MILES_PER_KILOMETER);

  console.log('m26.M26Constants.YARDS_PER_KILOMETER: ' + m26.M26Constants.YARDS_PER_KILOMETER);

  console.log('m26.M26Constants.SECONDS_PER_HOUR:    ' + m26.M26Constants.SECONDS_PER_HOUR);

  console.log('```');

  console.log('');

  console.log('#### M26Age');

  console.log('');

  console.log('Construct an M26Age from either a Number or String value.');

  console.log('');

  console.log('Methods val(), max_pulse(), add(), subtract() and training_zones() are available.');

  console.log('Max-pulse and training-zones are based on the widely known "220 - age" formula.');

  a20 = new m26.M26Age(20.2);

  a21 = new m26.M26Age(21);

  a57 = new m26.M26Age("57.1");

  console.log('```');

  console.log('a20 = new m26.M26Age(20.2)');

  console.log('a21 = new m26.M26Age(21)');

  console.log('a57 = new m26.M26Age("57.1")');

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

  console.log('#### M26AgeCalculator');

  console.log('');

  console.log('Calculate and return an M26Age object, given a birth date, and optional as-of date.');

  console.log('');

  c = new m26.M26AgeCalculator();

  a0 = c.calculate("2014-10-01", "2014-11-01");

  a1 = c.calculate("1960-10-01", "2014-11-01");

  console.log('```');

  console.log('c  = new m26.M26AgeCalculator()');

  console.log('a0 = c.calculate("2014-10-01", "2014-11-01")');

  console.log('a1 = c.calculate("1960-10-01", "2014-11-01")');

  console.log('a0.val()  ->  ' + a0.val());

  console.log('a1.val()  ->  ' + a1.val());

  console.log('```');

  console.log('');

  console.log('#### M26Distance');

  console.log('');

  console.log('The default unit-of-measure is miles ("m"), but "k" or "y" may also be specified.');

  console.log('');

  console.log('Methods uom(), as_miles(), as_kilometers(), as_yards(), add(), and subtract() are available.');

  console.log('```');

  d1 = new m26.M26Distance(26.2);

  console.log('d1 = new m26.M26Distance(26.2)');

  console.log('d1.uom             -> ' + d1.uom);

  console.log('d1.as_miles()      -> ' + d1.as_miles());

  console.log('d1.as_kilometers() -> ' + d1.as_kilometers());

  console.log('d1.as_yards()      -> ' + d1.as_yards());

  console.log('```');

  console.log('');

  console.log('M26Distances can be constructed from other units, and added and subtracted.');

  d2 = new m26.M26Distance(4.8);

  d3 = new m26.M26Distance(10.0, "k");

  d4 = d1.subtract(d3);

  d5 = d1.add(d2);

  console.log('```');

  console.log('d2 = new m26.M26Distance(4.8)');

  console.log('d3 = new m26.M26Distance(10.0, "k")');

  console.log('d4 = d1.subtract(d3)');

  console.log('d5 = d1.add(d2)');

  console.log('d4.as_miles()      -> ' + d4.as_miles());

  console.log('d5.as_miles()      -> ' + d5.as_miles());

  console.log('```');

  console.log('#### M26ElapsedTime');

  console.log('');

  console.log('M26ElapsedTime objects can be constructed from a Number of seconds, or "hh:mm:ss", "hh:mm", or "ss" String values.');

  console.log('');

  console.log('Methods as_hhmmss(), seconds(), and hours() are available.');

  console.log('```');

  t1 = new m26.M26ElapsedTime(3665);

  t2 = new m26.M26ElapsedTime("3:47:30");

  console.log('t1 = new m26.M26ElapsedTime(3665)');

  console.log('t1.as_hhmmss() -> ' + t1.as_hhmmss());

  console.log('t1.seconds()   -> ' + t1.seconds());

  console.log('t1.hours()     -> ' + t1.hours());

  console.log('');

  console.log('t2 = new m26.M26ElapsedTime("3:47:30")');

  console.log('t2.as_hhmmss() -> ' + t2.as_hhmmss());

  console.log('t2.seconds()   -> ' + t2.seconds());

  console.log('t2.hours()     -> ' + t2.hours());

  console.log('```');

  console.log('');

  console.log('#### M26Speed');

  console.log('');

  console.log('Calculate a M26Speed based on a given M26Distance and M26ElapsedTime.');

  console.log('');

  console.log('Methods mph(), kph(), yph(), seconds_per_mile(), pace_per_mile() and projected_time() are available.');

  console.log('```');

  d = new m26.M26Distance(26.2);

  t = new m26.M26ElapsedTime("04:10:00");

  s = new m26.M26Speed(d, t);

  d2 = new m26.M26Distance(50.0, "k");

  console.log('d  = new m26.M26Distance(26.2)');

  console.log('d2 = new m26.M26Distance(50.0, "k")');

  console.log('t  = new m26.M26ElapsedTime("04:10:00")');

  console.log('s  = new m26.M26Speed(d, t)');

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

  a1 = new m26.M26Age(42.5);

  a2 = new m26.M26Age(57.1);

  s2 = s.age_graded(a1, a2);

  console.log('a1 = new m26.M26Age(42.5)');

  console.log('a2 = new m26.M26Age(57.1)');

  console.log('s2 = s.age_graded(a1, a2)');

  console.log('s.mph()   -> ' + s.mph());

  console.log('s2.mph()  -> ' + s2.mph());

  console.log('```');

  console.log('');

  console.log('');

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Age = (function() {
    function Age(n) {
      this.value = parseFloat(n);
    }

    Age.prototype.val = function() {
      return this.value;
    };

    Age.prototype.max_pulse = function() {
      if (this.val() <= 20) {
        return 200.0;
      } else {
        return 220.0 - this.val();
      }
    };

    Age.prototype.add = function(another_instance) {
      if (another_instance) {
        return this.val() + another_instance.val();
      }
    };

    Age.prototype.subtract = function(another_instance) {
      if (another_instance) {
        return this.val() - another_instance.val();
      }
    };

    Age.prototype.training_zones = function() {
      var i, idx, len, max, pct, results, tuple;
      results = [];
      zones = [0.95, 0.90, 0.85, 0.80, 0.75];
      max = this.max_pulse();
      for (idx = i = 0, len = zones.length; i < len; idx = ++i) {
        pct = zones[idx];
        tuple = {};
        tuple.zone = idx + 1;
        tuple.age = this.val();
        tuple.max = max;
        tuple.pct_max = pct;
        tuple.pulse = Math.round(max * pct);
        results.push(tuple);
      }
      return results;
    };

    return Age;

  })();

  root.Age = Age;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  AgeCalculator = (function() {
    function AgeCalculator() {}

    AgeCalculator.milliseconds_per_year = function() {
      return 31557600000;
    };

    AgeCalculator.calculate = function(birth_yyyy_mm_dd, as_of_yyyy_mm_dd) {
      var adate, bdate, ms_diff;
      if (birth_yyyy_mm_dd) {
        bdate = new Date(birth_yyyy_mm_dd);
        if (as_of_yyyy_mm_dd) {
          adate = new Date(as_of_yyyy_mm_dd);
        } else {
          adate = new Date();
        }
        ms_diff = adate - bdate;
        return new Age(ms_diff / this.milliseconds_per_year());
      }
    };

    return AgeCalculator;

  })();

  root.AgeCalculator = AgeCalculator;


  /*
  Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
   */

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Constants = (function() {
    function Constants() {}

    Constants.VERSION = '0.2.0';

    Constants.UOM_MILES = 'm';

    Constants.UOM_KILOMETERS = 'k';

    Constants.UOM_YARDS = 'y';

    Constants.UNITS_OF_MEASURE = [Constants.UOM_MILES, Constants.UOM_KILOMETERS, Constants.UOM_YARDS];

    Constants.KILOMETERS_PER_MILE = 1.609344;

    Constants.MILES_PER_KILOMETER = 0.621371192237334;

    Constants.YARDS_PER_KILOMETER = 1093.6132983377076;

    Constants.FEET_PER_KILOMETER = 3280.839895013123;

    Constants.FEET_PER_METER = 3.280839895013123;

    Constants.YARDS_PER_MILE = 1760.0;

    Constants.SECONDS_PER_HOUR = 3600.0;

    return Constants;

  })();

  root.Constants = Constants;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Distance = (function() {
    function Distance(d, uom) {
      var ref;
      if (d == null) {
        d = 0;
      }
      if (uom == null) {
        uom = Constants.UOM_MILES;
      }
      this.d = parseFloat(d);
      if (!this.d) {
        this.d = 0;
      }
      if (uom) {
        this.u = uom.toString().toLowerCase();
      } else {
        this.u = Constants.UOM_MILES;
      }
      if (ref = this.u, indexOf.call(Constants.UNITS_OF_MEASURE, ref) < 0) {
        this.u = Constants.UOM_MILES;
      }
    }

    Distance.prototype.uom = function() {
      return this.u;
    };

    Distance.prototype.dist = function() {
      return this.d;
    };

    Distance.prototype.as_miles = function() {
      switch (this.u) {
        case Constants.UOM_MILES:
          return this.d;
        case Constants.UOM_KILOMETERS:
          return this.d / Constants.KILOMETERS_PER_MILE;
        case Constants.UOM_YARDS:
          return this.d / Constants.YARDS_PER_MILE;
        default:
          return 0;
      }
    };

    Distance.prototype.as_kilometers = function() {
      switch (this.u) {
        case Constants.UOM_MILES:
          return this.d * Constants.KILOMETERS_PER_MILE;
        case Constants.UOM_KILOMETERS:
          return this.d;
        case Constants.UOM_YARDS:
          return (this.d / Constants.YARDS_PER_MILE) / Constants.MILES_PER_KILOMETER;
        default:
          return 0;
      }
    };

    Distance.prototype.as_yards = function() {
      switch (this.u) {
        case Constants.UOM_MILES:
          return this.d * Constants.YARDS_PER_MILE;
        case Constants.UOM_KILOMETERS:
          return (this.d * Constants.MILES_PER_KILOMETER) * Constants.YARDS_PER_MILE;
        case Constants.UOM_YARDS:
          return this.d;
        default:
          return 0;
      }
    };

    Distance.prototype.add = function(another_instance) {
      if (another_instance) {
        d1 = this.as_miles();
        d2 = another_instance.as_miles();
        return new Distance(d1 + d2);
      }
    };

    Distance.prototype.subtract = function(another_instance) {
      if (another_instance) {
        d1 = this.as_miles();
        d2 = another_instance.as_miles();
        return new Distance(d1 - d2);
      }
    };

    return Distance;

  })();

  root.Distance = Distance;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  ElapsedTime = (function() {
    function ElapsedTime(val) {
      var ref;
      if (val == null) {
        val = '00:00:00';
      }
      ref = [0, 0, 0, 0], this.hh = ref[0], this.mm = ref[1], this.ss = ref[2], this.secs = ref[3];
      if (typeof val === 'number') {
        this.initialize_from_number(val);
      } else {
        this.initialize_from_string(val);
      }
    }

    ElapsedTime.prototype.initialize_from_number = function(n) {
      var error, rem;
      try {
        this.secs = new Number(n);
        this.hh = Math.floor(this.secs / Constants.SECONDS_PER_HOUR);
        rem = this.secs - (this.hh * Constants.SECONDS_PER_HOUR);
        this.mm = Math.floor(rem / 60.0);
        return this.ss = rem - (this.mm * 60.0);
      } catch (_error) {
        error = _error;
        return console.log('Error in ElpasedTime constructor (nbr) for ' + n + ', error: ' + error);
      }
    };

    ElapsedTime.prototype.initialize_from_string = function(s) {
      var error, tokens;
      try {
        tokens = s.split(':');
        if (tokens.length === 3) {
          this.hh = parseInt(tokens[0], 10);
          this.mm = parseInt(tokens[1], 10);
          this.ss = parseInt(tokens[2], 10);
        } else if (tokens.length === 2) {
          this.mm = parseInt(tokens[0], 10);
          this.ss = parseInt(tokens[1], 10);
        } else if (tokens.length === 1) {
          this.ss = parseInt(tokens[0], 10);
        } else {
          this.ss = parseInt(s);
        }
        return this.secs = (this.hh * 3600) + (this.mm * 60) + this.ss;
      } catch (_error) {
        error = _error;
        return console.log('Error in ElpasedTime constructor (str) for ' + s + ', error: ' + error);
      }
    };

    ElapsedTime.prototype.seconds = function() {
      return this.secs;
    };

    ElapsedTime.prototype.hours = function() {
      return this.secs / Constants.SECONDS_PER_HOUR;
    };

    ElapsedTime.prototype.as_hhmmss = function() {
      this.ss = parseInt(this.ss);
      return '' + this.zero_pad(this.hh) + ':' + this.zero_pad(this.mm) + ':' + this.zero_pad(this.ss);
    };

    ElapsedTime.prototype.zero_pad = function(n) {
      if (n == null) {
        n = 0;
      }
      if (n < 10) {
        return '0' + n;
      } else {
        return '' + n;
      }
    };

    return ElapsedTime;

  })();

  root.ElapsedTime = ElapsedTime;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Speed = (function() {
    function Speed(d, et) {
      var ref;
      ref = [d, et], this.d = ref[0], this.et = ref[1];
    }

    Speed.prototype.mph = function() {
      return this.d.as_miles() / this.et.hours();
    };

    Speed.prototype.kph = function() {
      return this.d.as_kilometers() / this.et.hours();
    };

    Speed.prototype.yph = function() {
      return this.d.as_yards() / this.et.hours();
    };

    Speed.prototype.pace_per_mile = function() {
      var mm, spm, ss;
      spm = this.seconds_per_mile();
      mm = Math.floor(spm / 60.0);
      ss = spm - (mm * 60);
      if (ss < 10) {
        ss = '0' + ss;
      } else {
        ss = '' + ss;
      }
      if (ss.length > 5) {
        ss = ss.substring(0, 5);
      }
      return '' + mm + ':' + ss;
    };

    Speed.prototype.seconds_per_mile = function() {
      return this.et.secs / this.d.as_miles();
    };

    Speed.prototype.projected_time = function(another_distance, algorithm) {
      var et, secs;
      if (algorithm == null) {
        algorithm = 'simple';
      }
      if (algorithm === 'riegel') {
        t1 = this.et.secs;
        d1 = this.d.as_miles();
        d2 = another_distance.as_miles();
        t2 = t1 * Math.pow(d2 / d1, 1.06);
        et = new ElapsedTime(t2);
        return et.as_hhmmss();
      } else {
        secs = this.seconds_per_mile() * another_distance.as_miles();
        et = new ElapsedTime(secs);
        return et.as_hhmmss();
      }
    };

    Speed.prototype.age_graded = function(event_age, graded_age) {
      var ag_factor, event_secs, graded_et, graded_secs;
      ag_factor = event_age.max_pulse() / graded_age.max_pulse();
      event_secs = this.et.seconds();
      graded_secs = event_secs * ag_factor;
      graded_et = new ElapsedTime(graded_secs);
      return new Speed(this.d, graded_et);
    };

    return Speed;

  })();

  root.Speed = Speed;

}).call(this);
