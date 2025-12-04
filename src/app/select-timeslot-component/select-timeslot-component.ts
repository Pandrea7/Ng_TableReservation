import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../service/reservation-service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-select-timeslot-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './select-timeslot-component.html',
  styleUrl: './select-timeslot-component.css',
})


export class SelectTimeslotComponent {

  private http: HttpClient;
  private router: Router;
  private reservationService: ReservationService;
  private availableTimes: number[];
  private reservation: Reservation | null;


  public constructor(http: HttpClient, router: Router, reservationService: ReservationService){
    
    this.http = http;
    this.router = router;
    this.reservationService = reservationService;
    this.availableTimes = [];
    this.reservation = this.reservationService.getReservation();
    
  }


  public getAvailableTimes():number[]{
    return this.availableTimes;
  }



  ngOnInit(): void {
    this.reservation = this.reservationService.getReservation();

    if (this.reservation != null &&
        this.reservation.getRestaurantId() != null &&
        this.reservation.getDate() &&
        this.reservation.getSeats() != null) {
      this.loadAvailableTimes();
    }
}
  

  public loadAvailableTimes() {

    let reservation = this.reservationService.getReservation();

      if(reservation != null){
        let restaurantId= reservation.getRestaurantId();
        let date = reservation.getDate();
        let seats = reservation.getSeats()
        console.log("Kimenő adatok: ", { restaurantId, date, seats });

        if(restaurantId != null && seats != null){
          this.http.get<number[]>("http://localhost:8080/timeslots", {
            params: {
              restaurantId: restaurantId.toString(),
              date,
              seats: seats.toString()
            }
          }).subscribe(response => {
            console.log("Válasz: ", response);
            this.availableTimes = response;
          });
        }
    }


  }

  public selectTimeslot(form: NgForm) {

  let reservation = this.reservationService.getReservation();

  if (reservation != null) {
    
    let selectedHour = Number(form.value.hour);
    reservation.setHour(selectedHour);

    this.reservationService.setReservation(reservation);
    this.router.navigate(['/finalize-reservation']);
  }
  }
 
}
