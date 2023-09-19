import {
    Constants,
    Distance
} from "m26-js";
  
test("Distance: constructor default uom", () => {
    let d = new Distance(26.2);
    expect(d.value).toBe(26.2);
    expect(d.uom).toBe(Constants.UOM_MILES);

    expect(d.asMiles()).toBe(26.2);
    expect(d.asKilometers()).toBe(42.1648128);
    expect(d.asYards()).toBe(46112.0);
});

test("Distance: constructor miles uom", () => {
    let d = new Distance(26.2, Constants.UOM_MILES);
    expect(d.value).toBe(26.2);
    expect(d.uom).toBe(Constants.UOM_MILES);

    expect(d.asMiles()).toBe(26.2);
    expect(d.asKilometers()).toBe(42.1648128);
    expect(d.asYards()).toBe(46112.0);
});

test("Distance: constructor kilometers uom", () => {
    let d = new Distance(10.0, Constants.UOM_KILOMETERS);
    expect(d.value).toBe(10.0);
    expect(d.uom).toBe(Constants.UOM_KILOMETERS);

    expect(d.asMiles()).toBe(6.2137119223733395);
    expect(d.asKilometers()).toBe(10.0);
    expect(d.asYards()).toBe(10936.132983377078);
});

test("Distance: constructor yards uom", () => {
    let d = new Distance(1800, Constants.UOM_YARDS);
    expect(d.value).toBe(1800);
    expect(d.uom).toBe(Constants.UOM_YARDS);

    expect(d.asMiles()).toBe(1.0227272727272727);
    expect(d.asKilometers()).toBe(1.64592);
    expect(d.asYards()).toBe(1800);
});

test("Distance: add", () => {
    let d1 = new Distance(26.2);
    let d2 = new Distance(4.8);
    let d3 = d1.add(d2);
    expect(d3.uom).toBe(Constants.UOM_MILES);
    expect(d3.asMiles()).toBe(31.0);
});

test("Distance: subtract", () => {
    let d1 = new Distance(26.2);
    let d2 = new Distance(10.0, 'k');
    let d3 = d1.subtract(d2);
    expect(d3.uom).toBe(Constants.UOM_MILES);
    expect(d3.asMiles()).toBe(19.98628807762666);
});
