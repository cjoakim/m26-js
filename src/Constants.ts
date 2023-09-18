
export class Constants {
    
    public static LIB_NAME         : string = 'm26-js';
    public static LIB_VERSION      : string = '1.0.0';
    public static LIB_AUTHOR       : string = 'Chris Joakim';
    public static LIB_LICENSE      : string = 'MIT';

    public static UOM_MILES        : string = 'm';
    public static UOM_KILOMETERS   : string = 'k';
    public static UOM_YARDS        : string = 'y';
    public static UNITS_OF_MEASURE : string[] = [
        Constants.UOM_MILES, Constants.UOM_KILOMETERS, Constants.UOM_YARDS];

    public static KILOMETERS_PER_MILE : number = 1.609344;
    public static MILES_PER_KILOMETER : number = 0.621371192237334;
    public static YARDS_PER_KILOMETER : number = 1093.6132983377076;
    public static FEET_PER_KILOMETER  : number = 3280.839895013123;
    public static FEET_PER_METER      : number = 3.280839895013123;
    public static YARDS_PER_MILE      : number = 1760.0;
    public static SECONDS_PER_MINUTE  : number = 60.0;
    public static SECONDS_PER_HOUR    : number = 3600.0;
}
