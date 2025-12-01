package pti.sb_tablereservation_rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pti.sb_tablereservation_rest.db.RestaurantRepository;
import pti.sb_tablereservation_rest.dto.RestaurantDto;
import pti.sb_tablereservation_rest.model.Restaurant;

@Service
public class AppService {

	private RestaurantRepository restaurantRepository;

	@Autowired
	public AppService(RestaurantRepository restaurantRepository) {
		super();
		this.restaurantRepository = restaurantRepository;
	}
	
	
	
	public List<RestaurantDto> getAllRestaurants() {
        
		Iterable<Restaurant> restaurants = restaurantRepository.findAll();
		
		List<RestaurantDto> restaurantDtos = new ArrayList<>();
		
		for(Restaurant restaurant : restaurants) {
			
			restaurantDtos.add(new RestaurantDto(
					restaurant.getName(),
					restaurant.getCapacityPerHour(),
					restaurant.getOpenHour(),
					restaurant.getCloseHour()));
		}
			
		return restaurantDtos;
    }
}
