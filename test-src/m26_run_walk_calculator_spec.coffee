# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'RunWalkCalculator', ->

  it "should calculate with no walking", ->
    run_hhmmss  = '03:00:00'
    run_ppm     = '9:05'
    walk_hhmmss = '00:00:00'
    walk_ppm    = '0:00'
    miles       = '26.2'

    result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles)
    console.log(JSON.stringify(result))
    
    # expect(a1.val()).isWithin(0.01, 54.0)
    # expect(a2.val()).toBeGreaterThan(0.999)
    # expect(a2.val()).toBeLessThan(2)
