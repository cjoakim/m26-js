
import { Age } from "./Age";
import { Distance } from "./Distance";
import { Constants } from "./Constants";
import { ElapsedTime } from "./ElapsedTime";

export class Speed {
    
    constructor(
        public distance: Distance,
        public elapsedTime: ElapsedTime) {
    }

    mph() : number {
        return this.distance.asMiles() / this.elapsedTime.asHours();
    }

    kph() : number {
        return this.distance.asKilometers() / this.elapsedTime.asHours();
    }

    yph() : number {
        return this.distance.asYards() / this.elapsedTime.asHours();
    }

    secondsPerMile() : number {
        return this.elapsedTime.secs / this.distance.asMiles();
    }

    pacePerMile() : string {
        let spm : number = this.secondsPerMile();
        let mm : number = Math.floor(spm / Constants.SECONDS_PER_MINUTE);
        let ssNum : number =  spm - (mm * Constants.SECONDS_PER_MINUTE);
        let ssStr : string = this.formattedSeconds(ssNum);
        return '' + mm + ':' + ssStr;
    }

    projectedTime(anotherDistance: Distance, algorithm='simple') : string {
        if (algorithm .toLowerCase() == 'riegel') {
            // See https://en.wikipedia.org/wiki/Peter_Riegel
            let s1 = this.elapsedTime.secs;
            let m1 = this.distance.asMiles();
            let m2 = anotherDistance.asMiles();
            let s2 = s1 * Math.pow((m2 / m1), 1.06);
            return new ElapsedTime('' + s2).asHHMMSS();
        }
        else {
            let secs = this.secondsPerMile() * anotherDistance.asMiles();
            return new ElapsedTime('' + secs).asHHMMSS();
        }
    }

    ageGraded(eventAge: Age, otherAge: Age) : Speed {
        let agFactor = eventAge.maxPulse() / otherAge.maxPulse();
        let eventSecs = this.elapsedTime.secs;
        let otherSecs = eventSecs * agFactor;
        let otherET = new ElapsedTime('' + otherSecs);
        return new Speed(this.distance, otherET);
    }

    formattedSeconds(ssNum : number) {
        let ssStr : string = ssNum.toFixed(2);
        if (ssNum < 10) {
            return '0' + ssStr;
        }
        else {
            return '' + ssStr;
        }
    }
}
