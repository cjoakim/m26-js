# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'Age', ->

  it "should construct with either a String or Number arg", ->
    a1 = new Age(44.4)
    a2 = new Age('55.5')
    expect(a1.val()).isWithin(0.0000000001, 44.4)
    expect(a2.val()).isWithin(0.0000000001, 55.5)

  it "should calculate max_pulse", ->
    a16 = new Age(16)
    a20 = new Age('20')
    a21 = new Age(21)
    a36 = new Age(36)
    a57 = new Age('57')
    expect(a16.max_pulse()).isWithin(0.0000000001, 200.0)
    expect(a20.max_pulse()).isWithin(0.0000000001, 200.0)
    expect(a21.max_pulse()).isWithin(0.0000000001, 199.0)
    expect(a36.max_pulse()).isWithin(0.0000000001, 184.0)
    expect(a57.max_pulse()).isWithin(0.0000000001, 163.0)

  it "should add and subtract", ->
    a16  = new Age(16.9)
    a57  = new Age(57.1)
    sum  = a57.add(a16)
    diff = a57.subtract(a16)
    expect(sum).isWithin(0.0000000001, 74.0)
    expect(diff).isWithin(0.0000000001, 40.2)

  it "should calculate heart-rate training-zones", ->
    a57   = new Age(57.1)
    zones = a57.training_zones()
    # console.log(JSON.stringify(zones, null, 2))
    expect(zones.length).toBe(5)
    z1 = zones[0]
    z5 = zones[4]
    expect(z1.zone).toBe(1)
    expect(z1.pulse).toBe(155)
    expect(z1.age).isWithin(0.001, 57.1)
    expect(z1.pct_max).isWithin(0.001, 0.95)
    expect(z1.max).isWithin(0.001, 162.9)

    expect(z5.zone).toBe(5)
    expect(z5.pulse).toBe(122)
    expect(z5.age).isWithin(0.001, 57.1)
    expect(z5.pct_max).isWithin(0.001, 0.75)
    expect(z5.max).isWithin(0.001, 162.9)
