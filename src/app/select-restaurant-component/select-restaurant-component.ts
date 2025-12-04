import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RestaurantService } from '../service/restaurant-service';
import { Router, RouterModule } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../service/reservation-service';

@Component({
  selector: 'app-select-restaurant-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './select-restaurant-component.html',
  styleUrl: './select-restaurant-component.css',
})
export class SelectRestaurantComponent {

  private http: HttpClient;
  private router: Router;
  private restaurantService: RestaurantService;
  private reservationService: ReservationService;
  private restaurants: Restaurant[];
 


  public constructor(http: HttpClient, router: Router, restaurantService: RestaurantService, reservationService: ReservationService){

    this.http = http;
    this.router = router;
    this.restaurantService = restaurantService;
    this.reservationService = reservationService;
    this.restaurants = [];
    this.loadRestaurants();


  }

  public getRestaurants(): Restaurant[]{
    return this.restaurants;
  }
  

  public loadRestaurants(){

    this.restaurants = [];

    this.http.get<Restaurant[]>("http://localhost:8080")
      .subscribe((response) => {
        
        for (let index = 0; index < response.length; index++) {           
            let restaurant = Object.assign(new Restaurant(), response[index]);
            this.restaurants.push(restaurant);
          }
      }); 
  }


public selectRestaurant(form: NgForm){

    let selectedRestaurantId = Number(form.value.restaurant);

    let selectedRestaurant = null;

    for (let restaurant of this.restaurants) {
      if (restaurant.getId() == selectedRestaurantId) {
          selectedRestaurant = restaurant;
          break;
      }
    }
    
    if (selectedRestaurant != null) {
      let  reservation = new Reservation();
      
      reservation.setRestaurantId(selectedRestaurant.getId());
      reservation.setRestaurantName(selectedRestaurant.getName());

      this.reservationService.setReservation(reservation);
      this.router.navigate(['/guest-data']);
    }
}


}
