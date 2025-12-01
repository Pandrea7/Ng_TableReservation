import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  
  private restaurant: Restaurant | null;

  public constructor(){
    this.restaurant = null;
  }

  public getRestaurant(): Restaurant | null{
    return this.restaurant;
  }

  public setRestaurant(restaurant: Restaurant): void {
    this.restaurant = restaurant;
}
}
