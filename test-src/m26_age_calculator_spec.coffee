# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'AgeCalculator', ->

  it "should define milliseconds_per_year", ->
    expect(AgeCalculator.milliseconds_per_year()).toEqual(31557600000)

  it "should calculate and construct and Age", ->
    a1 = AgeCalculator.calculate('1960-10-01', '2014-10-01')
    a2 = AgeCalculator.calculate('2013-11-01')
    expect(a1.val()).isWithin(0.01, 54.0)
    expect(a2.val()).toBeGreaterThan(0.999)
    expect(a2.val()).toBeLessThan(2) # TODO - update before November 2015
