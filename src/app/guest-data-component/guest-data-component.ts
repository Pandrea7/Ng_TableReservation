import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../service/reservation-service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-guest-data-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './guest-data-component.html',
  styleUrl: './guest-data-component.css',
})
export class GuestDataComponent {

  private router: Router;
  private reservationService: ReservationService;
  private reservation: Reservation | null;
  

  constructor(router: Router, reservationService: ReservationService) {
   
    this.router = router;
    this.reservationService = reservationService;
    this.reservation = this.reservationService.getReservation();
  }


  public getGuestData(form: NgForm) {    

    if (form.invalid) {
      alert("Add meg az adataid!");
    } 
    else {

      if (this.reservation != null){
        this.reservation.setGuestName(form.value.guestName);
        this.reservation.setGuestEmail(form.value.guestEmail);

        this.reservationService.setReservation(this.reservation);

        this.router.navigate(['/select-date']);
      }
    }
  }
}
