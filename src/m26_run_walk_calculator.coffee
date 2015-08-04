# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class RunWalkCalculator

  # these are "class methods", not "instance methods".

  @calculate: (run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles) ->
    result = {}
    if run_hhmmss and run_ppm and walk_hhmmss and walk_ppm

      run_dur_et  = new ElapsedTime(run_hhmmss)
      run_ppm_et  = new ElapsedTime(run_ppm)
      walk_dur_et = new ElapsedTime(walk_hhmmss)
      walk_ppm_et = new ElapsedTime(walk_ppm)
      distance    = new Distance(miles)

      result.run_dur_et  = run_dur_et
      result.run_ppm_et  = run_ppm_et
      result.walk_dur_et = walk_dur_et
      result.walk_ppm_et = walk_ppm_et
      result.distance    = distance

      result.mph    = 'x'
      result.ppm    = 'x'
      result.hhmmss = 'x'

    result


root.RunWalkCalculator = RunWalkCalculator


    # run_hhmmss  = '03:00:00'
    # run_ppm     = '9:05'
    # walk_hhmmss = '00:00:00'
    # walk_ppm    = '0:00'
    # miles       = '26.2'