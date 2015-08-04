# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'M26', ->

  it 'defines VERSION', ->
    expect(Constants.VERSION).toBe('0.4.0')

  it 'defines UOM_MILES', ->
    expect(Constants.UOM_MILES).toBe('m')

  it 'defines UOM_KILOMETERS', ->
    expect(Constants.UOM_KILOMETERS).toBe('k')

  it 'defines UOM_YARDS', ->
    expect(Constants.UOM_YARDS).toBe('y')

  it 'defines UNITS_OF_MEASURE', ->
    expect(Constants.UNITS_OF_MEASURE).toEqual(['m', 'k', 'y'])

  it 'defines KILOMETERS_PER_MILE', ->
    expect(Constants.KILOMETERS_PER_MILE).isWithin(0.000001, 1.609344)

  it 'defines YARDS_PER_MILE', ->
    expect(Constants.YARDS_PER_MILE).toBe(1760.0)

  it 'defines MILES_PER_KILOMETER', ->
    expect(Constants.MILES_PER_KILOMETER).isWithin(0.000001, 0.621371192237334)

  it 'defines YARDS_PER_KILOMETER', ->
    expect(Constants.YARDS_PER_KILOMETER).isWithin(0.000001, 1093.6132983377076)

  it 'defines FEET_PER_KILOMETER', ->
    expect(Constants.FEET_PER_KILOMETER).isWithin(0.000001, 3280.839895013123)

  it 'defines FEET_PER_METER', ->
    expect(Constants.FEET_PER_METER).isWithin(0.000001, 3.280839895013123)

  it 'defines SECONDS_PER_HOUR', ->
    expect(Constants.SECONDS_PER_HOUR).toBe(3600.0)
