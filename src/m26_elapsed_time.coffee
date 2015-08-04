# Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

root = exports ? this

class ElapsedTime

  constructor: (val='00:00:00') ->
    [@hh, @mm, @ss, @secs] = [0, 0, 0, 0]
    if typeof val is 'number'
      @initialize_from_number(val)
    else
      @initialize_from_string(val)

  initialize_from_number: (n) ->
    try
      @secs = new Number(n)
      @hh = Math.floor(@secs / Constants.SECONDS_PER_HOUR)
      rem = @secs - (@hh * Constants.SECONDS_PER_HOUR)
      @mm = Math.floor(rem / 60.0)
      @ss = rem - (@mm * 60.0)
    catch error
      console.log 'Error in ElpasedTime constructor (nbr) for ' + n + ', error: ' + error

  initialize_from_string: (s) ->
    try
      tokens = s.split(':')
      if tokens.length is 3
        @hh = parseInt(tokens[0], 10)
        @mm = parseInt(tokens[1], 10)
        @ss = parseInt(tokens[2], 10)
      else if tokens.length is 2
        @mm = parseInt(tokens[0], 10)
        @ss = parseInt(tokens[1], 10)
      else if tokens.length is 1
        @ss = parseInt(tokens[0], 10)
      else
        @ss = parseInt(s)
      @secs = (@hh * 3600) + (@mm * 60) + @ss
    catch error
      console.log 'Error in ElpasedTime constructor (str) for ' + s + ', error: ' + error

  seconds: ->
    @secs

  hours: ->
    @secs / Constants.SECONDS_PER_HOUR

  as_hhmmss: ->
    @ss = parseInt(@ss)
    '' + @zero_pad(@hh) + ':'  + @zero_pad(@mm) + ':' + @zero_pad(@ss)

  zero_pad: (n=0) ->
    if n < 10
      '0' + n
    else
      '' + n


root.ElapsedTime = ElapsedTime
