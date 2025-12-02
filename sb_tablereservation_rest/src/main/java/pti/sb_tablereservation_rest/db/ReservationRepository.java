package pti.sb_tablereservation_rest.db;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import pti.sb_tablereservation_rest.model.Reservation;


public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
	
	@Query("SELECT hour FROM reservations" +
           "WHERE restaurant_id = :restaurantId AND date = :date" +
           "GROUP BY hour" +
           "HAVING :requestedSeats <= ((SELECT capacity_per_hour FROM restaurants WHERE id = :restaurantId) - SUM(seats)")
	List<Integer> findAvailableHours(
	     @Param("restaurantId") int restaurantId,
	     @Param("date") LocalDate date,
	     @Param("requestedSeats") int requestedSeats);
		

}
