package booking;

import java.util.Date;

public class Show {
    private int showId;
    private int movieId;
    private Date showTime;
    private int availableSeats;
  private String movieName;
    // Constructors, getters, and setters

    // Sample toString() method for displaying show details
    @Override
    public String toString() {
        return "Show ID: " + showId +
               "\nMovie ID: " + movieId +
                "\nMovie name: " + movieName +
               "\nShow Time: " + showTime +
               "\nAvailable Seats: " + availableSeats;
    }

	public int getShowId() {
		return showId;
	}

	public void setShowId(int showId) {
		this.showId = showId;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public Date getShowTime() {
		return showTime;
	}

	public void setShowTime(Date showTime) {
		this.showTime = showTime;
	}

	public int getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}
	
    // Getters and Setters for movieName
    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

	
	
	
	

}
