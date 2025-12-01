import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../service/restaurant-service';
import { ReservationService } from '../service/reservation-service';

@Component({
  selector: 'app-guest-data-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './guest-data-component.html',
  styleUrl: './guest-data-component.css',
})
export class GuestDataComponent {

  private router: Router;
  private guestName: string;
  private guestEmail: string;
  private restaurantService: RestaurantService;
  private reservationService: ReservationService;
  

  constructor(router: Router, restaurantService: RestaurantService, reservationService: ReservationService) {

   
    this.router = router;
    this.guestName = '';
    this.guestEmail = '';
    this.restaurantService = restaurantService;
    this.reservationService = reservationService;
    
  }


  public getGuestData(form: NgForm) {
    
      console.log('Kiválasztott étterem:', this.restaurantService.getRestaurant());
      console.log('Foglaló adatai:', this.guestName, this.guestEmail);
      
      let reservation = this.reservationService.getReservation();
      if (reservation) {
        reservation.setGuestName(this.guestName);
      }

      this.router.navigate(['']);
    
  }
  
}
