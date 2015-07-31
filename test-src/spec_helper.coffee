
# See https://www.packtpub.com/sites/default/files/downloads/7204OS_The_Future_Jasmine_2_0.pdf

beforeEach ->

  jasmine.addMatchers({

    isWithin: (tolerance, expected) ->
      {
        compare: (actual, tolerance, expected) ->
          @pass = true
          @msg  = 'Ok'
          min   = expected - tolerance
          max   = expected + tolerance
          @data = { 'actual' : actual , 'expected' : expected, 'tolerance' : tolerance, 'min' : min, 'max' : max }

          if false
            console.log('data: ' + JSON.stringify(@data))

          if actual > max
            @pass = false
            @msg  = 'value is too large; expected ' + expected + ' but got ' + actual

          if actual < min
            @pass = false
            @msg  = 'value is too small; expected ' + expected + ' but got ' + actual

          unless pass
            console.log('failed: ' + JSON.stringify(@data))

          { pass: @pass, message: @msg }
      }
  })
