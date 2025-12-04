package pti.sb_tablereservation_rest.db;

import java.time.LocalDate;


import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import pti.sb_tablereservation_rest.model.Reservation;


public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
	
	@Query("SELECT SUM(seats) FROM reservations WHERE restaurant_id = :restaurantId AND date = :date AND hour = :hour")
	Integer sumSeatsByRestaurantAndDateAndHour(@Param("restaurantId") int restaurantId,
	                                           @Param("date") LocalDate date,
	                                           @Param("hour") int hour);
		

}
