# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class RunWalkCalculator

  # these are "class methods", not "instance methods".

  @calculate: (run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles) ->
    result = {}
    if run_hhmmss and run_ppm and walk_hhmmss and walk_ppm

      run_duration_elapsed_time  = new ElapsedTime(run_hhmmss)
      run_ppm_elapsed_time       = new ElapsedTime(run_ppm)
      walk_duration_elapsed_time = new ElapsedTime(walk_hhmmss)
      walk_ppm_elapsed_time      = new ElapsedTime(walk_ppm)
      distance    = new Distance(miles)
      mile        = new Distance(1.0)

      total_secs  = run_duration_elapsed_time.seconds() + walk_duration_elapsed_time.seconds()
      run_pct     = run_duration_elapsed_time.seconds() / total_secs
      walk_pct    = 1.0 - run_pct

      run_secs    = run_pct  * run_ppm_elapsed_time.seconds()
      walk_secs   = walk_pct * walk_ppm_elapsed_time.seconds()
      avg_secs    = run_secs + walk_secs

      avg_time    = new ElapsedTime(avg_secs)
      avg_speed   = new Speed(mile, avg_time)
      mph         = avg_speed.mph()
      proj_time   = avg_speed.projected_time(distance)

      result.avg_mph    = avg_speed.mph()
      result.avg_ppm    = avg_speed.pace_per_mile()
      result.proj_time  = avg_speed.projected_time(distance)
      result.proj_miles = distance.as_miles()

    result


root.RunWalkCalculator = RunWalkCalculator
