import {
    Age,
    AgeCalculator,
    Constants,
    Distance,
    ElapsedTime,
    RunWalkCalculation,
    RunWalkCalculator,
    Speed,
    TrainingZone
} from "m26-js";
  
test("Age: maxPulse", () => {
    let a19 = new Age(19.1);
    let a66 = new Age(66);
    expect(a19.value).toBe(19.1);
    expect(a66.value).toBe(66);
    expect(a19.maxPulse()).toBe(200);
    expect(a66.maxPulse()).toBe(220 - 66);
});

test("Age: add", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);
    a1.add(a2);
    expect(a1.value).toBe(85.1);
    expect(a2.value).toBe(66);
});

test("Age: subtract", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);
    a2.subtract(a1);
    expect(a1.value).toBe(19.1);
    expect(a2.value).toBe(66 - 19.1);
});

test("Age: maxPulse and trainingZones", () => {
    let a1 = new Age(19.1);
    let a2 = new Age(66);

    expect(a1.maxPulse()).toBe(200);
    expect(a2.maxPulse()).toBe(154);
    expect(a2.maxPulse()).toBe(220 - 66);

    // first case; age 19.1
    let zones = a1.trainingZones();
    //console.log(zones);
    expect(zones.length).toBe(5);

    expect(zones[0].zone).toBe(1);
    expect(zones[0].pct).toBe(0.75);
    expect(zones[0].age).toBe(19.1);
    expect(zones[0].maxHeartRate).toBe(a1.maxPulse());
    expect(zones[0].zoneHeartRate).toBe(150);

    expect(zones[4].zone).toBe(5);
    expect(zones[4].pct).toBe(0.95);
    expect(zones[4].age).toBe(19.1);
    expect(zones[4].maxHeartRate).toBe(a1.maxPulse());
    expect(zones[4].zoneHeartRate).toBe(190);

    // second case; age 66
    zones = a2.trainingZones();
    //console.log(zones);
    expect(zones.length).toBe(5);

    expect(zones[0].zone).toBe(1);
    expect(zones[0].pct).toBe(0.75);
    expect(zones[0].age).toBe(66);
    expect(zones[0].maxHeartRate).toBe(a2.maxPulse());
    expect(zones[0].zoneHeartRate).toBe(116);

    expect(zones[4].zone).toBe(5);
    expect(zones[4].pct).toBe(0.95);
    expect(zones[4].age).toBe(66);
    expect(zones[4].maxHeartRate).toBe(a2.maxPulse());
    expect(zones[4].zoneHeartRate).toBe(146);
});
