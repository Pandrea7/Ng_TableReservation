export class Reservation {

    private id: number;
    private restaurantId: number;
    private reservationDate: Date | null;
    private hour: number;
    private seatsReserved: number;
    private guestName: string;

    public constructor() {
        this.id = 0;
        this.restaurantId = 0;
        this.reservationDate = null;
        this.hour = 0;
        this.seatsReserved = 0;
        this.guestName = "";
    }

    public getId(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }

    public getRestaurantId(): number {
        return this.restaurantId;
    }
    public setRestaurantId(value: number) {
        this.restaurantId = value;
    }

    public getReservationDate(): Date | null {
        return this.reservationDate;
    }
    public setReservationDate(value: Date | null) {
        this.reservationDate = value;
    }

    public getHour(): number {
        return this.hour;
    }
    public setHour(value: number) {
        this.hour = value;
    }

    public getSeatsReserved(): number {
        return this.seatsReserved;
    }
    public setSeatsReserved(value: number) {
        this.seatsReserved = value;
    }

    public getGuestName(): string {
        return this.guestName;
    }
    public setGuestName(value: string) {
        this.guestName = value;
    }
}