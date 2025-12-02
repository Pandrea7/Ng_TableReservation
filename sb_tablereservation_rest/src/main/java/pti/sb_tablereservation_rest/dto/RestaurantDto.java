package pti.sb_tablereservation_rest.dto;

public class RestaurantDto {

	private int Id;
	private String name;
	private int capacityPerHour;
	private int openHour;
	private int closeHour;
	
	
	public RestaurantDto(int id, String name, int capacityPerHour, int openHour, int closeHour) {
		super();
		Id = id;
		this.name = name;
		this.capacityPerHour = capacityPerHour;
		this.openHour = openHour;
		this.closeHour = closeHour;
	}
	
	
	public int getId() {
		return Id;
	}
	
	public void setId(int id) {
		Id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getCapacityPerHour() {
		return capacityPerHour;
	}
	
	public void setCapacityPerHour(int capacityPerHour) {
		this.capacityPerHour = capacityPerHour;
	}
	
	public int getOpenHour() {
		return openHour;
	}
	
	public void setOpenHour(int openHour) {
		this.openHour = openHour;
	}
	
	public int getCloseHour() {
		return closeHour;
	}
	
	public void setCloseHour(int closeHour) {
		this.closeHour = closeHour;
	}
	
	
	
	
}
