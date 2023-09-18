
export class RunWalkCalculation {
    
    // Input fields
    public runHhmmss: string;
    public runPpm: string;
    public walkHhmmss: string;
    public walkPpm: string;
    public miles: number;

    // Calculated fields
    public avgMph: number;
    public avgPpm: string;
    public projectedTime:  string;
    public projectedMiles: number;

    constructor() {
    }
}
