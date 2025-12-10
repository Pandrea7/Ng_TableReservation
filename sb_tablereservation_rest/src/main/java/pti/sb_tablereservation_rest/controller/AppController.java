package pti.sb_tablereservation_rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pti.sb_tablereservation_rest.dto.AvailableTimeSlotsDto;
import pti.sb_tablereservation_rest.dto.RestaurantDto;
import pti.sb_tablereservation_rest.model.Reservation;
import pti.sb_tablereservation_rest.service.AppService;



@CrossOrigin("http://localhost:4200")
@RestController
public class AppController {
	
	private AppService service;

	@Autowired
	public AppController(AppService service) {
		super();
		this.service = service;
	}
	
	
	
	@GetMapping("/")
    public List<RestaurantDto> getRestaurants() {
        
		List<RestaurantDto> restaurantDtos = service.getAllRestaurants();
				
		return restaurantDtos;
    }
	
	
	
	@GetMapping("/timeslots")
    public AvailableTimeSlotsDto getAvailableTimeSlots(
            @RequestParam int restaurantId,
            @RequestParam String date,
            @RequestParam int seats) {
		
		System.out.println("Received: restaurantId=" + restaurantId + ", date=" + date + ", seats=" + seats);

		AvailableTimeSlotsDto availableTimeSlots = service.getAvailableTimeSlots(restaurantId, date, seats);
		
		System.out.println("Returned: " + availableTimeSlots);
        
		return availableTimeSlots;
    }
	
	
	
	@PostMapping("/reservations")
	public void createReservation(@RequestBody Reservation reservation) {    
		
		service.createReservation(reservation);
	}
}
