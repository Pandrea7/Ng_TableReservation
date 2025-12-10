package pti.sb_tablereservation_rest.dto;

import java.util.ArrayList;
import java.util.List;

public class AvailableTimeSlotsDto {
	
	private List<Integer> availableTimeSlots;

	
	public AvailableTimeSlotsDto() {
		super();
		this.availableTimeSlots = new ArrayList<>();
	}

	
	public List<Integer> getAvailableTimeSlots() {
		return availableTimeSlots;
	}

	public void setAvailableTimeSlots(List<Integer> availableTimeSlots) {
		this.availableTimeSlots = availableTimeSlots;
	}
	
	
	
	public void addHour(Integer hour) {
		
		this.availableTimeSlots.add(hour);
	}
	
	
}
