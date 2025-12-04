import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../service/restaurant-service';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../service/reservation-service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-finalize-reservation-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './finalize-reservation-component.html',
  styleUrl: './finalize-reservation-component.css',
})
export class FinalizeReservationComponent {

  private http: HttpClient;
  private reservationService: ReservationService;
  private reservation: Reservation | null;
 
  private message: string;


public constructor(http: HttpClient, reservationService: ReservationService){

  this.http = http;
  this.reservationService = reservationService;
  this.reservation = this.reservationService.getReservation();
  this.message = "";
}


public getReservation(){
  return this.reservation;
}



public submitReservation() {
  
  if (this.reservation != null){

  this.http.post("http://localhost:8080/reservations", this.reservation)
    .subscribe(
      response => {
       this.message = "Sikeres foglalás";
        
      },
      err => {
        console.error(err);
        this.message = "Hiba történt a foglalás során.";
      }
    );
  }
}


}
