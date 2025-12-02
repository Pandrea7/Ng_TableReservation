import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../service/reservation-service';

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
  private selectedHour: number | null;



  public constructor(http: HttpClient, router: Router, reservationService: ReservationService){
    
    this.http = http;
    this.router = router;
    this.reservationService = reservationService;
    this.availableTimes = [];
    this.selectedHour = null;
    
    this.loadAvailableTimes();

  }


  public loadAvailableTimes() {

  }
 
}
