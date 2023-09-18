

import { Distance } from "./Distance";
import { ElapsedTime } from "./ElapsedTime";
import { Speed } from "./Speed";
import { RunWalkCalculation } from "./RunWalkCalculation";

export class RunWalkCalculator {

    constructor() {}
    
    calculate(
        runHhmmss: string,
        runPpm: string,
        walkHhmmss: string,
        walkPpm: string,
        miles: number) :  RunWalkCalculation {

        // create the result data structure, and populate it with the input values
        let calc: RunWalkCalculation = new RunWalkCalculation();
        calc.runHhmmss = runHhmmss;
        calc.runPpm = runPpm;
        calc.walkHhmmss = walkHhmmss;
        calc.walkPpm = walkPpm;
        calc.miles = miles;

        let runDurationET  = new ElapsedTime(runHhmmss);
        let runPaceET      = new ElapsedTime(runPpm);
        let walkDurationET = new ElapsedTime(walkHhmmss);
        let walkPaceET     = new ElapsedTime(walkPpm);
        let distance = new Distance(miles);
        let mile     = new Distance(1.0);

        let totalSecs : number = runDurationET.secs + walkDurationET.secs;
        let runPct    : number = runDurationET.secs / totalSecs;
        let walkPct   : number = 1.0 - runPct;

        let runSecs  : number = runPct * runPaceET.secs;
        let walkSecs : number = walkPct * walkPaceET.secs;
        let avgSecs  : number = runSecs + walkSecs;

        let avgET : ElapsedTime = new ElapsedTime('' + avgSecs);
        let avgSpeed : Speed = new Speed(mile, avgET);
        
        calc.avgMph = avgSpeed.mph();
        calc.avgPpm = avgSpeed.pacePerMile();
        calc.projectedTime = avgSpeed.projectedTime(distance);
        calc.projectedMiles = distance.asMiles();
        return calc;
    }
}
