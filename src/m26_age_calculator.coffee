# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class AgeCalculator

  # these are "class methods", not "instance methods".

  @milliseconds_per_year: ->
    31557600000 # ms_yr = 1000 * 60 * 60 * 24 * 365.25

  @calculate: (birth_yyyy_mm_dd, as_of_yyyy_mm_dd) ->
    if birth_yyyy_mm_dd
      bdate = new Date(birth_yyyy_mm_dd)
      if as_of_yyyy_mm_dd
        adate = new Date(as_of_yyyy_mm_dd)
      else
        adate = new Date()

      ms_diff = adate - bdate # elapsed time in milliseconds, like 1722629039587
      new Age(ms_diff / @milliseconds_per_year())


root.AgeCalculator = AgeCalculator
