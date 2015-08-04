# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class Age

  constructor: (n) ->
    @value = parseFloat(n)

  val: ->
    @value

  max_pulse: ->
    if @val() <= 20
      200.0
    else
      220.0 - @val()

  add: (another_instance) ->
    if another_instance
      @val() + another_instance.val()

  subtract: (another_instance) ->
    if another_instance
      @val() - another_instance.val()

  training_zones: ->
    results = []
    zones   = [ 0.95, 0.90, 0.85, 0.80, 0.75 ]
    max     = this.max_pulse()
    for pct, idx in zones
      tuple      = {}
      tuple.zone = idx + 1
      tuple.age  = this.val()
      tuple.max  = max
      tuple.pct_max = pct
      tuple.pulse   = Math.round(max * pct)
      results.push(tuple)
    results


root.Age = Age
