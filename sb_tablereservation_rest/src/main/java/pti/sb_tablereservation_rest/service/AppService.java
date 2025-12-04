package pti.sb_tablereservation_rest.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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




	public List<AvailableTimeSlotDto> getAvailableTimeSlots(int restaurantId, String stringDate, int requestedSeats) {

		List<AvailableTimeSlotDto> availableHours = new ArrayList<>();
		
		LocalDate date = LocalDate.parse(stringDate);
				
		Optional<Restaurant> optRestaurant = restaurantRepository.findById(restaurantId);
		
		if (optRestaurant.isPresent()) {
			
			Restaurant restaurant = optRestaurant.get();		
		
		    int capacityPerHour = restaurant.getCapacityPerHour();
		    	
		    int openHour = restaurant.getOpenHour();
		    int closeHour = restaurant.getCloseHour();
		    
		    for (int hour = openHour; hour < closeHour; hour++) {
		        
		        Integer reservedSeats = reservationRepository.sumSeatsByRestaurantAndDateAndHour(restaurantId, date, hour);
		        
		        if (reservedSeats == null) {
		        	reservedSeats = 0;
		        }
		    
		        if (capacityPerHour - reservedSeats >= requestedSeats) {
		        	availableHours.add(new AvailableTimeSlotDto(hour));
		        }
		    }
		}
	  
		return availableHours;
	}
	
	
	
	public ReservationDto createReservation(Reservation reservation) {
	    
		reservation = reservationRepository.save(reservation);
		 
		ReservationDto reservationDto = new ReservationDto();
		     
		reservationDto.setRestaurantId(reservation.getId());
		 
		reservationDto.setRestaurantId(reservation.getRestaurantId());
		reservationDto.setSeats(reservation.getSeats());
		reservationDto.setDate(reservation.getDate());
		reservationDto.setHour(reservation.getHour());
		reservationDto.setGuestName(reservation.getGuestName());
		reservationDto.setGuestEmail(reservation.getGuestEmail());
		
		    
		return reservationDto;
	}
	
	
	
	
	
	
	
}
