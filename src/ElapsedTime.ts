
import { Constants } from "./Constants";

export class ElapsedTime {
    
    arg  : string = null;
    secs : number = 0;
    hh   : number = 0;
    mm   : number = 0;
    ss   : number = 0;

    constructor(constructorArg: string = '0:00:00') {
        this.arg = constructorArg.trim();
        if (constructorArg.includes(':')) {
            // Initialize from a string
            try {
                let tokens = this.arg.split(':');
                if (tokens.length == 3) {
                    this.hh = parseInt(tokens[0], 10);
                    this.mm = parseInt(tokens[1], 10);
                    this.ss = parseInt(tokens[2], 10);
                }
                else if (tokens.length == 2) {
                    this.mm = parseInt(tokens[0], 10);
                    this.ss = parseInt(tokens[1], 10);
                }
                else if (tokens.length == 1) {
                    this.ss = parseInt(tokens[0], 10);
                }
                this.secs = (this.hh * 3600) + (this.mm * 60) + this.ss
            }
            catch (error) {
                console.log(error);
                this.resetValues();
            }
        }
        else {
            // Initialize from a number of seconds
            try {
                if (this.arg.length < 1) {
                    this.resetValues();
                }
                else {
                    this.secs = Number.parseInt(this.arg);
                    this.hh = Math.floor(this.secs / Constants.SECONDS_PER_HOUR);
                    let rem : number = this.secs - (this.hh * Constants.SECONDS_PER_HOUR)
                    this.mm = Math.floor(rem / 60.0);
                    this.ss = rem - (this.mm * 60.0);
                }
            }
            catch (error) {
                console.log(error);
                this.resetValues();
            }
        }
    }

    asHours() : number {
        return this.secs / Constants.SECONDS_PER_HOUR;
    }

    asHHMMSS() : string {
        if (this.secs < 1) {
            return '00:00:00';
        }
        let tokens = [];
        tokens.push(this.zeroPad(this.hh));
        tokens.push(this.zeroPad(this.mm));
        tokens.push(this.zeroPad(this.ss));
        return tokens.join(':');
    }

    zeroPad(n : number) : string {
        if (n < 10) {
            return '0' + n;
        }
        else {
            return '' + n;
        }
    }

    resetValues() : void {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.secs = 0;
    }
}
