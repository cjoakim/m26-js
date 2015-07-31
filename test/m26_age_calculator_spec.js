(function() {
  describe('AgeCalculator', function() {
    it("should define milliseconds_per_year", function() {
      return expect(AgeCalculator.milliseconds_per_year()).toEqual(31557600000);
    });
    return it("should calculate and construct and Age", function() {
      var a1, a2;
      a1 = AgeCalculator.calculate('1960-10-01', '2014-10-01');
      a2 = AgeCalculator.calculate('2013-11-01');
      expect(a1.val()).isWithin(0.01, 54.0);
      expect(a2.val()).toBeGreaterThan(0.999);
      return expect(a2.val()).toBeLessThan(2);
    });
  });

}).call(this);
