package booking;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.text.SimpleDateFormat;

public class MovieSearch {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static List<Movie> searchMovies(Connection connection, String keyword) {
        List<Movie> movies = new ArrayList<>();

        String query = "SELECT * FROM Movies WHERE movie_name LIKE ? OR genre LIKE ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            String searchKeyword = "%" + keyword + "%";
            statement.setString(1, searchKeyword);
            statement.setString(2, searchKeyword);

            try (ResultSet resultSet = statement.executeQuery()) {
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
            }
        } catch (SQLException e) {
            System.err.println("An error occurred while searching for movies.");
        }

        return movies;
    }
}

