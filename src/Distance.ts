
import { Constants } from "./Constants";

export class Distance {
    
    constructor(
        public value: number,
        public uom: string = Constants.UOM_MILES) {

        switch (uom.toLowerCase()) {
            case Constants.UOM_MILES:
                break;
            case Constants.UOM_KILOMETERS:
                break;
            case Constants.UOM_YARDS:
                break;
            default:
                this.uom = Constants.UOM_MILES; // default UOM
                break;
        }
    }

    asMiles(): number {
        switch (this.uom) {
            case Constants.UOM_MILES:
                return this.value;
                break;
            case Constants.UOM_KILOMETERS:
                return this.value / Constants.KILOMETERS_PER_MILE;
                break;
            case Constants.UOM_YARDS:
                return this.value / Constants.YARDS_PER_MILE;
                break;
            default:
                return 0;
                break;
        }
    }

    asKilometers(): number {
        switch (this.uom) {
            case Constants.UOM_MILES:
                return this.value * Constants.KILOMETERS_PER_MILE;
                break;
            case Constants.UOM_KILOMETERS:
                return this.value;
                break;
            case Constants.UOM_YARDS:
                return (this.value / Constants.YARDS_PER_MILE) / Constants.MILES_PER_KILOMETER;
                break;
            default:
                return 0;
                break;
        }
    }

    asYards(): number {
        switch (this.uom) {
            case Constants.UOM_MILES:
                return this.value * Constants.YARDS_PER_MILE;
                break;
            case Constants.UOM_KILOMETERS:
                return (this.value * Constants.MILES_PER_KILOMETER) * Constants.YARDS_PER_MILE;
                break;
            case Constants.UOM_YARDS:
                return this.value;
                break;
            default:
                return 0;
                break;
        }
    }

    add(another: Distance): Distance {
        let m1 = this.asMiles();
        let m2 = another.asMiles();
        let msum = m1 + m2;
        if (msum < 0) {
            msum = 0;
        }
        return new Distance(msum);
    }

    subtract(another: Distance): Distance {
        let m1 = this.asMiles();
        let m2 = another.asMiles();
        let mdiff = m1 - m2;
        if (mdiff < 0) {
            mdiff = 0;
        }
        return new Distance(mdiff);
    }
}
