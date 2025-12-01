package pti.sb_tablereservation_rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import pti.sb_tablereservation_rest.dto.RestaurantDto;
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
	
	
	
	@GetMapping
    public List<RestaurantDto> getRestaurants() {
        
		List<RestaurantDto> restaurantDtos = service.getAllRestaurants();
				
		return restaurantDtos;
    }
}
