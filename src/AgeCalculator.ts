
import { Age } from "./Age";

export class AgeCalculator {
    
    constructor() {}

    millisecondsPerYear(): number {
        return 1000 * 60 * 60 * 24 * 365.25;
    }

    calculate(birthYymmdd: string, asofYymmdd: string) : Age {
        try {
            let bdate : Date = new Date(birthYymmdd);
            let adate : Date = new Date(asofYymmdd);
            // getTime returns epoch time as milliseconds
            let msDiff : number = adate.getTime() - bdate.getTime();
            return new Age(msDiff / this.millisecondsPerYear());
        }
        catch (error) {
            return new Age(0.0);
        }
    }
}
