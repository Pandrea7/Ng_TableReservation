import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservationService } from '../service/reservation-service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-select-date-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './select-date-component.html',
  styleUrl: './select-date-component.css',
})
export class SelectDateComponent {

  private http: HttpClient;
  private router: Router;
  private reservationService: ReservationService;
  private reservationDate: Date;
  private reservedSeats: number;


  public constructor(http: HttpClient, router: Router, reservationService: ReservationService){
    this.http = http;
    this.router = router;
    this.reservationService = reservationService;
    this.reservationDate = new Date();
    this.reservedSeats = 0;
    
  }



  public saveReservationData(form: NgForm) {
    
      let reservation = this.reservationService.getReservation();
     
      if (!reservation) {
        reservation = new Reservation();
        this.reservationService.setReservation(reservation);
      }
      
      reservation.setReservationDate(this.reservationDate);
      reservation.setSeatsReserved(this.reservedSeats);

      this.router.navigate(['/select-timeslot']);
  }
}
