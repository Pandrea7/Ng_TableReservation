export class Reservation {

    private id: number;
    private restaurantId: number;
    private date: Date | null;
    private hour: number;
    private seats: number;
    private guestName: string;
    private guestEmail: string;

    public constructor() {
        this.id = 0;
        this.restaurantId = 0;
        this.date = null;
        this.hour = 0;
        this.seats = 0;
        this.guestName = "";
        this.guestEmail = "";

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
        return this.date;
    }
    public setReservationDate(value: Date | null) {
        this.date = value;
    }

    public getHour(): number {
        return this.hour;
    }
    public setHour(value: number) {
        this.hour = value;
    }

    public getSeatsReserved(): number {
        return this.seats;
    }
    public setSeatsReserved(value: number) {
        this.seats = value;
    }

    public getGuestName(): string {
        return this.guestName;
    }
    public setGuestName(value: string) {
        this.guestName = value;
    }

     public getGuestEmail(): string {
        return this.guestEmail;
    }
    public setGuestEmail(value: string) {
        this.guestEmail = value;
    }
}