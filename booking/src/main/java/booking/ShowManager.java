package booking;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ShowManager {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static Show getShowById(Connection connection, int showId) throws SQLException {
        String query = "SELECT * FROM Shows WHERE show_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, showId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int movieId = resultSet.getInt("movie_id");
                    String movieName=resultSet.getString("movie_Name");
                    Date showTime = resultSet.getTimestamp("show_time");
                    int availableSeats = resultSet.getInt("available_seats");

                    Show show = new Show();
                    show.setShowId(showId);
                    show.setMovieId(movieId);
                    show.setMovieName(movieName);
                    show.setShowTime(showTime);
                    show.setAvailableSeats(availableSeats);

                    return show;
                }
            }
        }
        return null;
    }

    public static void addShow(Connection connection, int movieId, String movieName,Date showTime, int availableSeats) throws SQLException {
        String query = "INSERT INTO Shows (movie_id,movie_name, show_time, available_seats) VALUES (?, ?, ?,?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, movieId);
            statement.setString(2, movieName);
            statement.setString(3, DATE_FORMAT.format(showTime));
            statement.setInt(4, availableSeats);
            statement.executeUpdate();
        }
    }

    public static List<Movie> getAllMovies(Connection connection) throws SQLException {
        List<Movie> availableMovies = new ArrayList<>();
        String query = "SELECT * FROM Movies";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int movieId = resultSet.getInt("movie_id");
                String movieName = resultSet.getString("movie_name");
                String genre = resultSet.getString("genre");
                Date releaseDate = resultSet.getTimestamp("release_date");
                int duration = resultSet.getInt("duration");

                Movie movie = new Movie();
                movie.setMovieId(movieId);
                movie.setMovieName(movieName);
                movie.setGenre(genre);
                movie.setReleaseDate(releaseDate);
                movie.setDuration(duration);

                availableMovies.add(movie);
            }
        }
        return availableMovies;
    }

    public static void updateShow(Connection connection, Show show) throws SQLException {
        String query = "UPDATE Shows SET movie_id = ?, show_time = ?, available_seats = ? WHERE show_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, show.getMovieId());
            statement.setString(2, DATE_FORMAT.format(show.getShowTime()));
            statement.setInt(3, show.getAvailableSeats());
            statement.setInt(4, show.getShowId());
            statement.executeUpdate();
        }
    }

    public static void deleteShow(Connection connection, int showId) throws SQLException {
        String query = "DELETE FROM Shows WHERE show_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, showId);
            statement.executeUpdate();
        }
    }
    public static List<Show> getAllShows(Connection connection) throws SQLException {
        List<Show> allShows = new ArrayList<>();
        String query = "SELECT * FROM Shows";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int showId = resultSet.getInt("show_id");
                int movieId = resultSet.getInt("movie_id");
                String movieName = resultSet.getString("movie_name");
                Date showTime = resultSet.getTimestamp("show_time");
                int availableSeats = resultSet.getInt("available_seats");

                Show show = new Show();
                show.setShowId(showId);
                show.setMovieId(movieId);
                show.setMovieName(movieName);
                show.setShowTime(showTime);
                show.setAvailableSeats(availableSeats);

                allShows.add(show);
            }
        }
        return allShows;
    }

 
 





}
