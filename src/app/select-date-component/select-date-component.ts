import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservationService } from '../service/reservation-service';
import { Reservation } from '../model/reservation';
import { RestaurantService } from '../service/restaurant-service';
import { Restaurant } from '../model/restaurant';

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
  private restaurantService: RestaurantService;
  private reservation: Reservation | null;
  private restaurant: Restaurant | null;


  public constructor(http: HttpClient, router: Router, reservationService: ReservationService, restaurantService: RestaurantService){
    this.http = http;
    this.router = router;
    this.reservationService = reservationService;
    this.restaurantService = restaurantService;
    this.reservation = this.reservationService.getReservation();
    this.restaurant = this.restaurantService.getRestaurant();
    
  }



  public saveReservationData(form: NgForm) {

    console.log("Form value:", form.value);

    if (form.invalid) {
      alert("Add meg az adatokat!");
    } 
    else {
    
      if (this.reservation != null) {

        this.reservation.setDate(form.value.resDate);
        this.reservation.setSeats(form.value.seats);

      }

      this.router.navigate(['/select-timeslot']);
    }
  }
}
