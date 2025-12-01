import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  private reservation: Reservation | null;

  constructor() {
    this.reservation = null;
  }

  public getReservation(): Reservation | null {
    return this.reservation;
  }

  public setReservation(reservation: Reservation): void {
    this.reservation = reservation;
  }
}
