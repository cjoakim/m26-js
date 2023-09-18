
import { TrainingZone } from "./TrainingZone";

export class Age {
    
    constructor(public value: number) {

    }

    maxPulse(): number {
        if (this.value <= 20.0) {
            return 200;
        }
        else {
            return 220 - this.value
        }
    }

    add(another: Age): number {
        this.value = this.value + another.value;
        return this.value;
    }

    subtract(another: Age): number {
        this.value = this.value - another.value;
        if (this.value < 0) {
            this.value = 0;
        }
        return this.value;
    }

    trainingZones() : Array<TrainingZone> {
        let pctsOfMax = [ 0.75, 0.80, 0.85, 0.90, 0.95 ];
        let zones = Array();
        let max = this.maxPulse();
        for (let i = 0; i < pctsOfMax.length; i++) {
            let pctOfMax = pctsOfMax[i];
            zones.push(new TrainingZone(
                i+1, pctOfMax, this.value, max, Math.round(max * pctOfMax)));
        }
        return zones;
    }
}
