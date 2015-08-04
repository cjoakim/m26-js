# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class Distance

  constructor: (d=0, uom=Constants.UOM_MILES) ->
    @d = parseFloat(d)
    @d = 0 unless @d
    if uom
      @u = uom.toString().toLowerCase()
    else
      @u = Constants.UOM_MILES

    unless @u in Constants.UNITS_OF_MEASURE
      @u = Constants.UOM_MILES

  uom: ->
    @u

  dist: ->
    @d

  as_miles: ->
    switch @u
      when Constants.UOM_MILES then @d
      when Constants.UOM_KILOMETERS then @d / Constants.KILOMETERS_PER_MILE
      when Constants.UOM_YARDS then @d / Constants.YARDS_PER_MILE
      else 0

  as_kilometers: ->
    switch @u
      when Constants.UOM_MILES then @d * Constants.KILOMETERS_PER_MILE
      when Constants.UOM_KILOMETERS then @d
      when Constants.UOM_YARDS then (@d / Constants.YARDS_PER_MILE) / Constants.MILES_PER_KILOMETER
      else 0

  as_yards: ->
    switch @u
      when Constants.UOM_MILES then @d * Constants.YARDS_PER_MILE
      when Constants.UOM_KILOMETERS then (@d * Constants.MILES_PER_KILOMETER) * Constants.YARDS_PER_MILE
      when Constants.UOM_YARDS then @d
      else 0

  add: (another_instance) ->
    if another_instance
      d1 = @as_miles()
      d2 = another_instance.as_miles()
      new Distance(d1 + d2)

  subtract: (another_instance) ->
    if another_instance
      d1 = @as_miles()
      d2 = another_instance.as_miles()
      new Distance(d1 - d2)


root.Distance = Distance
