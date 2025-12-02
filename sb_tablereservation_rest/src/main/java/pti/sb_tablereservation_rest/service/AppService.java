package pti.sb_tablereservation_rest.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pti.sb_tablereservation_rest.db.ReservationRepository;
import pti.sb_tablereservation_rest.db.RestaurantRepository;
import pti.sb_tablereservation_rest.dto.AvailableTimeSlotDto;
import pti.sb_tablereservation_rest.dto.ReservationDto;
import pti.sb_tablereservation_rest.dto.RestaurantDto;
import pti.sb_tablereservation_rest.model.Reservation;
import pti.sb_tablereservation_rest.model.Restaurant;

@Service
public class AppService {

	private RestaurantRepository restaurantRepository;
	private ReservationRepository reservationRepository;

	@Autowired
	public AppService(RestaurantRepository restaurantRepository, ReservationRepository reservationRepository) {
		super();
		this.restaurantRepository = restaurantRepository;
		this.reservationRepository = reservationRepository;
	}
	
	
	
	public List<RestaurantDto> getAllRestaurants() {
        
		Iterable<Restaurant> restaurants = restaurantRepository.findAll();
		
		List<RestaurantDto> restaurantDtos = new ArrayList<>();
		
		for(Restaurant restaurant : restaurants) {
			
			restaurantDtos.add(new RestaurantDto(
					restaurant.getId(),
					restaurant.getName(),
					restaurant.getCapacityPerHour(),
					restaurant.getOpenHour(),
					restaurant.getCloseHour()));
		}
			
		return restaurantDtos;
    }




	public List<AvailableTimeSlotDto> getAvailableTimeSlots(int restaurantId, LocalDate date, int requestedSeats) {

		List<AvailableTimeSlotDto> availableTimeSlotDto = new ArrayList<>();
		
		List<Integer> hours = reservationRepository.findAvailableHours(restaurantId, date, requestedSeats);
	   

	    for (Integer hour : hours) {
	        availableTimeSlotDto.add(new AvailableTimeSlotDto(hour));
	    }
		
		return availableTimeSlotDto;
	}
	
	
	
	public ReservationDto createReservation(ReservationDto reservationDto) {
	    
		Reservation reservation = new Reservation(
		        null,
		        reservationDto.getRestaurantId(),
		        reservationDto.getDate(),
		        reservationDto.getHour(),
		        reservationDto.getSeats(),
		        reservationDto.getGuestName()
		        reservationDto.getGuestEmail());

	    reservationRepository.save(reservation);

	    return reservationDto;
	}
	
	
	
	
	
	
	
}
