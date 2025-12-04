package pti.sb_tablereservation_rest.dto;

import java.time.LocalDate;


public class ReservationDto {
	
	private Integer restaurantId;
	private LocalDate date;
	private Integer hour;
	private Integer seats;
	private String guestName;
	private String guestEmail;
	
	
	public ReservationDto(Integer restaurantId, LocalDate date, Integer hour, Integer seats, String guestName,
			String guestEmail) {
		super();
		this.restaurantId = restaurantId;
		this.date = date;
		this.hour = hour;
		this.seats = seats;
		this.guestName = guestName;
		this.guestEmail = guestEmail;
	}
	
	
	public ReservationDto() {}


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
