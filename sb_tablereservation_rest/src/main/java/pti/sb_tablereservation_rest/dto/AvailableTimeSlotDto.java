package pti.sb_tablereservation_rest.dto;

public class AvailableTimeSlotDto {

	 private int hour;

	    public AvailableTimeSlotDto(int hour) {
	        this.hour = hour;
	    }

	    public int getHour() {
	        return hour;
	    }

	    public void setHour(int hour) {
	        this.hour = hour;
	    }
	 
}
