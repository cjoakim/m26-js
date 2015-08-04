# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class Constants

  @VERSION:        '0.4.0'
  @UOM_MILES:      'm'
  @UOM_KILOMETERS: 'k'
  @UOM_YARDS:      'y'
  @UNITS_OF_MEASURE: [@UOM_MILES, @UOM_KILOMETERS, @UOM_YARDS]

  @KILOMETERS_PER_MILE = 1.609344
  @MILES_PER_KILOMETER = 0.621371192237334
  @YARDS_PER_KILOMETER = 1093.6132983377076
  @FEET_PER_KILOMETER  = 3280.839895013123
  @FEET_PER_METER      = 3.280839895013123
  @YARDS_PER_MILE      = 1760.0
  @SECONDS_PER_HOUR    = 3600.0


root.Constants = Constants
