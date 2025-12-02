package pti.sb_tablereservation_rest.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Table(name = "reservations")
public class Reservation {

	@Id
	@Column(value = "id")
	private Integer id;
	
	@Column(value = "restaurant_id")
	private Integer restaurantId;
	
	@Column(value = "date")
	private LocalDate date;
	
	@Column(value = "hour")
	private Integer hour;
	
	@Column(value = "seats")
	private Integer seats;
	
	@Column(value = "guest_name")
	private String guestName;
	
	@Column(value = "guest_email")
	private String guestEmail;

	
	public Reservation(Integer id, Integer restaurantId, LocalDate date, Integer hour, Integer seats, String guestName,
			String guestEmail) {
		super();
		this.id = id;
		this.restaurantId = restaurantId;
		this.date = date;
		this.hour = hour;
		this.seats = seats;
		this.guestName = guestName;
		this.guestEmail = guestEmail;
	}
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Integer getHour() {
		return hour;
	}

	public void setHour(Integer hour) {
		this.hour = hour;
	}

	public Integer getSeats() {
		return seats;
	}

	public void setSeats(Integer seats) {
		this.seats = seats;
	}

	public String getGuestName() {
		return guestName;
	}

	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}

	public String getGuestEmail() {
		return guestEmail;
	}

	public void setGuestEmail(String guestEmail) {
		this.guestEmail = guestEmail;
	}

	
	
	
}
