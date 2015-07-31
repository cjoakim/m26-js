(function() {
  var Age, AgeCalculator, Constants, Distance, ElapsedTime, Speed, root,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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
      var idx, max, pct, results, tuple, zones, _i, _len;
      results = [];
      zones = [0.95, 0.90, 0.85, 0.80, 0.75];
      max = this.max_pulse();
      for (idx = _i = 0, _len = zones.length; _i < _len; idx = ++_i) {
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
      var _ref;
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
      if (_ref = this.u, __indexOf.call(Constants.UNITS_OF_MEASURE, _ref) < 0) {
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
      var d1, d2;
      if (another_instance) {
        d1 = this.as_miles();
        d2 = another_instance.as_miles();
        return new Distance(d1 + d2);
      }
    };

    Distance.prototype.subtract = function(another_instance) {
      var d1, d2;
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
      var _ref;
      if (val == null) {
        val = '00:00:00';
      }
      _ref = [0, 0, 0, 0], this.hh = _ref[0], this.mm = _ref[1], this.ss = _ref[2], this.secs = _ref[3];
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
      var _ref;
      _ref = [d, et], this.d = _ref[0], this.et = _ref[1];
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
      var d1, d2, et, secs, t1, t2;
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
