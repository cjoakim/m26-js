# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

describe 'RunWalkCalculator', ->

  it "should calculate with no walking", ->
    run_hhmmss  = '03:00:00'
    run_ppm     = '9:05'
    walk_hhmmss = '00:00:00'
    walk_ppm    = '0:00'
    miles       = '26.2'

    result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles)
    console.log(JSON.stringify(result, null, 2))
    
    # expect(a1.val()).isWithin(0.01, 54.0)
    # expect(a2.val()).toBeGreaterThan(0.999)
    # expect(a2.val()).toBeLessThan(2)

# {
#   "run_dur_et": {
#     "hh": 3,
#     "mm": 0,
#     "ss": 0,
#     "secs": 10800
#   },
#   "run_ppm_et": {
#     "hh": 0,
#     "mm": 9,
#     "ss": 5,
#     "secs": 545
#   },
#   "walk_dur_et": {
#     "hh": 0,
#     "mm": 0,
#     "ss": 0,
#     "secs": 0
#   },
#   "walk_ppm_et": {
#     "hh": 0,
#     "mm": 0,
#     "ss": 0,
#     "secs": 0
#   },
#   "distance": {
#     "d": 26.2,
#     "u": "m"
#   },
#   "mph": "x",
#   "ppm": "x",
#   "hhmmss": "x"
# }