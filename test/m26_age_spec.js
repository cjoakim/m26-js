(function() {
  describe('Age', function() {
    it("should construct with either a String or Number arg", function() {
      var a1, a2;
      a1 = new Age(44.4);
      a2 = new Age('55.5');
      expect(a1.val()).isWithin(0.0000000001, 44.4);
      return expect(a2.val()).isWithin(0.0000000001, 55.5);
    });
    it("should calculate max_pulse", function() {
      var a16, a20, a21, a36, a57;
      a16 = new Age(16);
      a20 = new Age('20');
      a21 = new Age(21);
      a36 = new Age(36);
      a57 = new Age('57');
      expect(a16.max_pulse()).isWithin(0.0000000001, 200.0);
      expect(a20.max_pulse()).isWithin(0.0000000001, 200.0);
      expect(a21.max_pulse()).isWithin(0.0000000001, 199.0);
      expect(a36.max_pulse()).isWithin(0.0000000001, 184.0);
      return expect(a57.max_pulse()).isWithin(0.0000000001, 163.0);
    });
    it("should add and subtract", function() {
      var a16, a57, diff, sum;
      a16 = new Age(16.9);
      a57 = new Age(57.1);
      sum = a57.add(a16);
      diff = a57.subtract(a16);
      expect(sum).isWithin(0.0000000001, 74.0);
      return expect(diff).isWithin(0.0000000001, 40.2);
    });
    return it("should calculate heart-rate training-zones", function() {
      var a57, z1, z5, zones;
      a57 = new Age(57.1);
      zones = a57.training_zones();
      expect(zones.length).toBe(5);
      z1 = zones[0];
      z5 = zones[4];
      expect(z1.zone).toBe(1);
      expect(z1.pulse).toBe(155);
      expect(z1.age).isWithin(0.001, 57.1);
      expect(z1.pct_max).isWithin(0.001, 0.95);
      expect(z1.max).isWithin(0.001, 162.9);
      expect(z5.zone).toBe(5);
      expect(z5.pulse).toBe(122);
      expect(z5.age).isWithin(0.001, 57.1);
      expect(z5.pct_max).isWithin(0.001, 0.75);
      return expect(z5.max).isWithin(0.001, 162.9);
    });
  });

}).call(this);
