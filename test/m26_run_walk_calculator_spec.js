(function() {
  describe('RunWalkCalculator', function() {
    it("should calculate with all walking", function() {
      var miles, result, run_hhmmss, run_ppm, walk_hhmmss, walk_ppm;
      run_hhmmss = '00:00';
      run_ppm = '9:00';
      walk_hhmmss = '10:00';
      walk_ppm = '18:00';
      miles = '3.333';
      result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);
      expect(result.avg_mph).isWithin(0.000001, 3.333333);
      expect(result.proj_miles).isWithin(0.001, 3.333);
      expect(result.avg_ppm).toBe('18:00');
      return expect(result.proj_time).toBe('00:59:59');
    });
    it("should calculate with all running", function() {
      var miles, result, run_hhmmss, run_ppm, walk_hhmmss, walk_ppm;
      run_hhmmss = '10:00';
      run_ppm = '9:00';
      walk_hhmmss = '00:00';
      walk_ppm = '18:00';
      miles = '3.333';
      result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);
      expect(result.avg_mph).isWithin(0.000001, 6.666666);
      expect(result.proj_miles).isWithin(0.001, 3.333);
      expect(result.avg_ppm).toBe('9:00');
      return expect(result.proj_time).toBe('00:29:59');
    });
    it("should calculate with a 1:1 ratio of running to walking", function() {
      var miles, result, run_hhmmss, run_ppm, walk_hhmmss, walk_ppm;
      run_hhmmss = '10:00';
      run_ppm = '8:00';
      walk_hhmmss = '10:00';
      walk_ppm = '16:00';
      miles = '4.0';
      result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);
      expect(result.avg_mph).isWithin(0.000001, 5.0);
      expect(result.proj_miles).isWithin(0.001, 4.0);
      expect(result.avg_ppm).toBe('12:00');
      return expect(result.proj_time).toBe('00:48:00');
    });
    return it("should calculate a marathon with a 9:1 ratio of running to walking", function() {
      var miles, result, run_hhmmss, run_ppm, walk_hhmmss, walk_ppm;
      run_hhmmss = '9:00';
      run_ppm = '9:00';
      walk_hhmmss = '1:00';
      walk_ppm = '18:00';
      miles = '26.2';
      result = RunWalkCalculator.calculate(run_hhmmss, run_ppm, walk_hhmmss, walk_ppm, miles);
      expect(result.avg_mph).isWithin(0.000001, 6.060606);
      expect(result.proj_miles).isWithin(0.001, 26.2);
      expect(result.avg_ppm).toBe('9:54');
      return expect(result.proj_time).toBe('04:19:22');
    });
  });

}).call(this);
