## m26-js

### Purpose

A Node.js library for speed and pace calculations for sports like running and cycling.
Age-graded times and heart-rate training-zones are also supported.

### Examples

#### Setup

Add m26-js to your project or package.json file:
```
npm install m26-js
```

Require m26-js in your code:
```
m26 = require("m26-js")
```

Note: this library is implemented with CoffeeScript, and these examples are also in CoffeeScript.

#### Constants

m26-js defines the following:
```
m26.Constants.VERSION:             0.2.0
m26.Constants.UOM_MILES:           m
m26.Constants.UOM_KILOMETERS:      k
m26.Constants.UOM_YARDS:           y
m26.Constants.UNITS_OF_MEASURE:    ["m","k","y"]
m26.Constants.KILOMETERS_PER_MILE: 1.609344
m26.Constants.YARDS_PER_MILE:      1760
m26.Constants.MILES_PER_KILOMETER: 0.621371192237334
m26.Constants.YARDS_PER_KILOMETER: 1093.6132983377076
m26.Constants.SECONDS_PER_HOUR:    3600
```

#### Age

Construct an Age from either a Number or String value.

Methods val(), max_pulse(), add(), subtract() and training_zones() are available.
Max-pulse and training-zones are based on the widely known "220 - age" formula.
```
a20 = new m26.Age(20.2)
a21 = new m26.Age(21)
a57 = new m26.Age("57.1")
a20.val()  ->  20.2
a21.val()  ->  21
a57.val()  ->  57.1
a20.max_pulse()   ->  199.8
a21.max_pulse()   ->  199
a57.max_pulse()   ->  162.9
a57.add(a20)      ->  77.3
a57.subtract(a20) ->  36.900000000000006

zones = a57.training_zones()
JSON.stringify(zones) -> [{"zone":1,"age":57.1,"max":162.9,"pct_max":0.95,"pulse":155},{"zone":2,"age":57.1,"max":162.9,"pct_max":0.9,"pulse":147},{"zone":3,"age":57.1,"max":162.9,"pct_max":0.85,"pulse":138},{"zone":4,"age":57.1,"max":162.9,"pct_max":0.8,"pulse":130},{"zone":5,"age":57.1,"max":162.9,"pct_max":0.75,"pulse":122}]
```

#### AgeCalculator

Calculate and return an Age object, given a birth date, and optional as-of date.

```
a0 = m26.AgeCalculator.calculate("2014-10-01", "2014-11-01")
a1 = m26.AgeCalculator.calculate("1960-10-01", "2014-10-01")
a0.val()  ->  0.08487337440109514
a1.val()  ->  54.08350444900753
```

#### Distance

The default unit-of-measure is miles ("m"), but "k" or "y" may also be specified.

Methods uom(), as_miles(), as_kilometers(), as_yards(), add(), and subtract() are available.
```
d1 = new m26.Distance(26.2)
d1.uom()           -> m
d1.as_miles()      -> 26.2
d1.as_kilometers() -> 42.1648128
d1.as_yards()      -> 46112
```

Distances can be constructed from other units, and added and subtracted.
```
d2 = new m26.Distance(4.8)
d3 = new m26.Distance(10.0, "k")
d4 = d1.subtract(d3)
d5 = d1.add(d2)
d4.as_miles()      -> 19.98628807762666
d5.as_miles()      -> 31
```
#### ElapsedTime

ElapsedTime objects can be constructed from a Number of seconds, or "hh:mm:ss", "hh:mm", or "ss" String values.

Methods as_hhmmss(), seconds(), and hours() are available.
```
t1 = new m26.ElapsedTime(3665)
t1.as_hhmmss() -> 01:01:05
t1.seconds()   -> 3665
t1.hours()     -> 1.0180555555555555

t2 = new m26.ElapsedTime("3:47:30")
t2.as_hhmmss() -> 03:47:30
t2.seconds()   -> 13650
t2.hours()     -> 3.7916666666666665
```

#### Speed

Calculate a Speed based on a given Distance and ElapsedTime.

Methods mph(), kph(), yph(), seconds_per_mile(), pace_per_mile() and projected_time() are available.
```
d  = new m26.Distance(26.2)
d2 = new m26.Distance(50.0, "k")
t  = new m26.ElapsedTime("04:10:00")
s  = new m26.Speed(d, t)

s.mph()  -> 6.287999999999999
s.kph()  -> 10.119555071999999
s.yph()  -> 11066.88

s.seconds_per_mile() -> 572.5190839694657
s.pace_per_mile()    -> 9:32.51

s.projected_time(d2)           -> 04:56:27
s.projected_time(d2, "simple") -> 04:56:27  # simple linear formula
s.projected_time(d2, "riegel") -> 04:59:30  # exponential formula

a1 = new m26.Age(42.5)
a2 = new m26.Age(57.1)
s2 = s.age_graded(a1, a2)
s.mph()   -> 6.287999999999999
s2.mph()  -> 5.770789859154929
```

### Release History

* 2014-11-09  v0.2.0  Corrected the English-to-Metric and Metric-to-English conversions.
* 2014-11-06  v0.1.5  Fix require statement in examples documentation.
* 2014-11-05  v0.1.4  Removed a spec_helper function.
* 2014-11-02  v0.1.3  Added Age.training_zones()
* 2014-11-01  v0.1.2  Added Speed.age_graded()
* 2014-11-01  v0.1.1  Added Speed.projected_time(), Age, AgeCalculator.
* 2014-11-01  v0.1.0  Initial working version.
* 2014-11-01  v0.0.3  alpha 3
* 2014-11-01  v0.0.2  alpha 2
* 2014-11-01  v0.0.1  alpha 1
