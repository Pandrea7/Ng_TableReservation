package pti.sb_tablereservation_rest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(name = "restaurants")
public class Restaurant {

	@Id
	@Column(value = "id")
	private Integer id;
	
	@Column(value = "name")
	private String name;
	
	@Column(value = "capacity_per_hour")
	private int capacityPerHour;
	
	@Column(value = "open_hour")
	private int openHour;
	
	@Column(value = "close_hour")
	private int closeHour;

	
	
	public Restaurant(Integer id, String name, int capacityPerHour, int openHour, int closeHour) {
		super();
		this.id = id;
		this.name = name;
		this.capacityPerHour = capacityPerHour;
		this.openHour = openHour;
		this.closeHour = closeHour;
	}
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
