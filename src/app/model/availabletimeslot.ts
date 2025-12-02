export class AvailableTimeSlot {
    private hour: number;

    constructor() {
        this.hour = 0;
    }

    getHour(): number {
        return this.hour;
    }
    setHour(value: number) {
        this.hour = value;
    }
}