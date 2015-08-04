(function() {
  describe('RunWalkCalculator', function() {
    return it("should calculate with no walking", function() {
      var miles, result, run_hhmmss, run_ppm, walk_hhmmss, walk_ppm;
      run_hhmmss = '03:00:00';
      run_ppm = '9:05';
      walk_hhmmss = '00:00:00';
      walk_ppm = '0:00';
      miles = '26.2';
      result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);
      return console.log(JSON.stringify(result, null, 2));
    });
  });

}).call(this);
