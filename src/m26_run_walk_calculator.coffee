# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class RunWalkCalculator

  # these are "class methods", not "instance methods".

  @calculate: (run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles) ->
    result = {}
    if run_hhmmss and run_ppm and walk_hhmmss and walk_ppm

      result.mph = 'x'
      result.ppm = 'x'
      result.hhmmss = 'x'

    result

root.RunWalkCalculator = RunWalkCalculator
