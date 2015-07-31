# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'Distance', ->

  it "should assume miles as UOM, and convert to other units", ->
    d = new Distance(26.2)
    expect(d.uom()).toBe(Constants.UOM_MILES)
    expect(d.as_miles()).isWithin(0.0000000001, 26.2)
    expect(d.as_kilometers()).isWithin(0.0000000001, 42.1648128)
    expect(d.as_yards()).isWithin(0.000001, 46112.0)

  it "should calculate a 10K, and convert to other units", ->
    d = new Distance(10.0, 'k')
    expect(d.uom()).toBe(Constants.UOM_KILOMETERS)
    expect(d.as_miles()).isWithin(0.0000000001, 6.2137119223733395)
    expect(d.as_kilometers()).isWithin(0.0000000001, 10.0)
    expect(d.as_yards()).isWithin(0.000001, 10936.132983377078)

  it "should calculate an 1800y, and convert to other units", ->
    d = new Distance(1800.0, 'y')
    expect(d.uom()).toBe(Constants.UOM_YARDS)
    expect(d.as_miles()).isWithin(0.0000000001, 1.0227272727272727)
    expect(d.as_kilometers()).isWithin(0.0000000001, 1.64592)
    expect(d.as_yards()).isWithin(0.000001, 1800)

  it "should add", ->
    d1 = new Distance(26.2)
    d2 = new Distance(4.8)
    d3 = d1.add(d2)
    expect(d3.uom()).toBe(Constants.UOM_MILES)
    expect(d3.as_miles()).isWithin(0.0000000001, 31.0)

  it "should subtract", ->
    d1 = new Distance(26.2)
    d2 = new Distance(10.0, 'k')
    d3 = d1.subtract(d2)
    expect(d3.uom()).toBe(Constants.UOM_MILES)
    expect(d3.as_miles()).isWithin(0.0000000001, 19.98628807762666)
