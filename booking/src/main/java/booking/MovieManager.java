package booking;





import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MovieManager {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static Movie getMovieById(Connection connection, int movieId) throws SQLException {
        String query = "SELECT * FROM Movies WHERE movie_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, movieId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
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

                    return movie;
                }
            }
        }
        return null;
    }

    public static void addMovie(Connection connection, String movieName, String genre, Date releaseDate, int duration) throws SQLException {
        String query = "INSERT INTO Movies (movie_name, genre, release_date, duration) VALUES (?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, movieName);
            statement.setString(2, genre);
            statement.setString(3, DATE_FORMAT.format(releaseDate));
            statement.setInt(4, duration);
            statement.executeUpdate();
        }
    }

    public static void updateMovie(Connection connection, Movie movie) throws SQLException {
        String query = "UPDATE Movies SET movie_name = ?, genre = ?, release_date = ?, duration = ? WHERE movie_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, movie.getMovieName());
            statement.setString(2, movie.getGenre());
            statement.setString(3, DATE_FORMAT.format(movie.getReleaseDate()));
            statement.setInt(4, movie.getDuration());
            statement.setInt(5, movie.getMovieId());
            statement.executeUpdate();
        }
    }

    public static void deleteMovie(Connection connection, int movieId) throws SQLException {
        String query = "DELETE FROM Movies WHERE movie_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, movieId);
            statement.executeUpdate();
        }
    }

    public static List<Movie> searchMovies(Connection connection, String keyword) throws SQLException {
        String query = "SELECT * FROM Movies WHERE movie_name LIKE ? OR genre LIKE ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, "%" + keyword + "%");
            statement.setString(2, "%" + keyword + "%");
            try (ResultSet resultSet = statement.executeQuery()) {
                List<Movie> movies = new ArrayList<>();
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

                    movies.add(movie);
                }
                return movies;
            }
        }
    }
}
