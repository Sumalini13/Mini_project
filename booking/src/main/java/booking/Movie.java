package booking;

import java.util.Date;

public class Movie {
    private int movieId;
    private String movieName;
    private String genre;
    private Date releaseDate;
    private int duration;

    // Constructors, getters, and setters

    // Sample toString() method for displaying movie details
    @Override
    public String toString() {
        return "Movie ID: " + movieId +
               "\nMovie Name: " + movieName +
               "\nGenre: " + genre +
               "\nRelease Date: " + releaseDate +
               "\nDuration: " + duration + " minutes";
    }

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
}
