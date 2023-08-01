package booking;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;



public class MovieTicketBookingApp {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
  

    private static boolean isAdminLoggedIn = false;
    private static boolean isUserLoggedIn = false;



    public static void main(String[] args) {
        try (Connection connection = MySQLJDBCConnection.getConnection()) {
            Scanner scanner = new Scanner(System.in);
            
        

            while (true) {
                if (!isAdminLoggedIn && !isUserLoggedIn) {
                    System.out.println("###=== Movie Ticket Booking System ===###");
                    System.out.println("1. Admin Management");
                    System.out.println("2. Want to enjoy ur Weekend? Login");
                    System.out.println("3. New User? Sign Up"); // Add user sign up option
                    System.out.println("4. Guest User");
                    System.out.println("5. Logout");
                    System.out.print("Enter your choice: ");
                    int loginChoice = scanner.nextInt();
                    scanner.nextLine(); 

                    switch (loginChoice) {
                    case 1:
                        if (adminLogin(connection, scanner)) {
                            isAdminLoggedIn = true;
                            System.out.println("Admin login successful!");
                            authority(connection, scanner); // Enter admin choices
                        } else {
                            System.out.println("Invalid admin credentials. Please try again.");
                        }
                        break;
                   
                    case 2:
                    	   if (userLogin(connection, scanner)) {
                               isUserLoggedIn = true;
                               System.out.println("User login successful!");
                               userMenu(connection, scanner);
                           } else {
                               System.out.println("Invalid user credentials. Please try again.");
                           }
                           break;
                    case 3:
                        userSignUp(connection, scanner); 
                        break;
                    case 4:
                        guestMenu(connection, scanner);
                        break;

                    case 5:
                        System.out.println("Thank you for using Movie Ticket Booking System!");
                        return;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                    }
                } else {
                    if (isAdminLoggedIn) {
                        // Admin menu
                        System.out.println("===== Admin Menu =====");
                        System.out.println("1. Add Movie");
                        System.out.println("2. Update Movie");
                        System.out.println("3. Delete Movie");
                        System.out.println("4. Move to homepage");
                        System.out.print("Enter your choice: ");
                        int adminChoice = scanner.nextInt();
                        scanner.nextLine();

                        switch (adminChoice) {
                            case 1:
                                addMovie(connection, scanner);
                                break;
                            case 2:
                                updateMovie(connection, scanner);
                                break;
                            case 3:
                                deleteMovie(connection, scanner);
                                break;
                            case 4:
                                isAdminLoggedIn = false;
                                break;
                            default:
                                System.out.println("Invalid choice. Please try again.");
                        }
                    } else if (isUserLoggedIn) {
                        // User menu
                        System.out.println("===== User Menu =====");
                        System.out.println("1. Search Movies");
                        System.out.println("2. Book Tickets");
                        System.out.println("3. Move to homepage");
                        System.out.print("Enter your choice: ");
                        int userChoice = scanner.nextInt();
                        scanner.nextLine(); 

                        switch (userChoice) {
                            case 1:
                                System.out.print("Enter the search keyword: ");
                                String keyword = scanner.nextLine();
                                searchMovies(connection, keyword);
                                break;
                            case 2:
                                bookTickets(connection, scanner);
                                break;
                            case 3:
                                isUserLoggedIn = false;
                                break;
                            default:
                                System.out.println("Invalid choice. Please try again.");
                        }
                    }
                }
            }
        } catch (SQLException e) {
            System.err.println("An error occurred while connecting to the database.");
            e.printStackTrace();
        }
    }
 





    private static boolean userLogin(Connection connection, Scanner scanner) throws SQLException {
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();

        System.out.print("Enter your password: ");
        String password = scanner.nextLine();

        // Check if the provided username exists in the signup table
        if (isUsernameTaken(connection, username)) {
            // Check if the provided password matches the user's password in the signup table
            if (checkCredentials(connection, username, password, "signup")) {
                return true;
            } else {
                System.out.println("Invalid password. Please try again.");
            }
        } else {
            System.out.println("Username not found. Please sign up or try again with a valid username.");
        }

        return false;
    }

    private static boolean checkCredentials(Connection connection, String username, String password, String table) throws SQLException {
        String query = "SELECT * FROM " + table + " WHERE username = ? AND password = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            statement.setString(2, password);
            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next();
            }
        }
    }



    private static boolean adminLogin(Connection connection, Scanner scanner) throws SQLException {
        System.out.print("Enter admin username: ");
        String username = scanner.nextLine();
        System.out.print("Enter admin password: ");
        String password = scanner.nextLine();

        if (username.equals("sumalini") && password.equals("sumi123")) {
            return true;
        }
        return false;
    }
    
    

    private static void authority(Connection connection, Scanner scanner) throws SQLException {
        while (true) {
            System.out.println("===== Admin Menu =====");
            System.out.println("1. Add Movie");
            System.out.println("2. Delete Movie");
            System.out.println("3. Update Movie");
            System.out.println("4. Add Show"); 
            System.out.println("5. Update Show"); 
            System.out.println("6. Delete Show"); 
            System.out.println("7. Move to homepage");
            System.out.print("Enter your choice: ");
            int adminChoice = scanner.nextInt();
            scanner.nextLine();

            switch (adminChoice) {
                case 1:
                    addMovie(connection, scanner);
                    break;
                case 2:
                    deleteMovie(connection, scanner);
                    break;
                case 3:
                    updateMovie(connection, scanner);
                    break;
                case 4:
                    addShow(connection, scanner);
                    break; 
                case 5:
                    updateShow(connection, scanner);
                    break;
                case 6:
                    deleteShow(connection, scanner);
                    break;  
                case 7:
                    isAdminLoggedIn = false;
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    
    private static void userMenu(Connection connection, Scanner scanner) {
        while (true) {
            System.out.println("===== User Menu =====");
            System.out.println("1. Search Movies");
            System.out.println("2. Book Tickets");
            System.out.println("3. Move to Homepage");
            System.out.print("Enter your choice: ");
            int userChoice = scanner.nextInt();
            scanner.nextLine();

            switch (userChoice) {
                case 1:
                    System.out.print("Enter the search keyword: ");
                    String keyword = scanner.nextLine();
                    searchMovies(connection, keyword);
                    break;
                case 2:
                    System.out.println("Choose booking type:");
                    System.out.println("1. Online Booking");
                    System.out.println("2. Offline Booking");
                    System.out.print("Enter your choice: ");
                    int bookingTypeChoice = scanner.nextInt();
                    scanner.nextLine(); // Consume newline character

                    bookTickets(connection, scanner);
                    switch (bookingTypeChoice) {
                        case 1:
                            OnlineBooking onlineBooking = BookingCreator.createOnlineBooking(scanner);
                            System.out.println("\nOnline Booking Details:");
                            System.out.println(onlineBooking);
                            break;
                        case 2:
                            OfflineBooking offlineBooking = BookingCreator.createOfflineBooking(scanner);
                            System.out.println("\nOffline Booking Details:");
                          

                            System.out.println(offlineBooking);
                            break;
                        default:
                            System.out.println("Invalid booking type choice. Please try again.");
                    }
                    break;
                  
                case 3:
                    isUserLoggedIn = false;
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
          
        }
    }

    private static void userSignUp(Connection connection, Scanner scanner) throws SQLException {
        System.out.print("Enter desired username: ");
        String username = scanner.nextLine();

       
        if (isUsernameTaken(connection, username)) {
            System.out.println("Username is already taken. Please choose a different username.");
            return;
        }

        System.out.print("Enter desired password: ");
        String password = scanner.nextLine();

        // Insert new user details into the Signup table
        insertNewUser(connection, username, password);
        System.out.println("User registration successful!");
    }

    private static boolean isUsernameTaken(Connection connection, String username) throws SQLException {
        String query = "SELECT * FROM signup WHERE username = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next();
            }
        }
    }


    private static void insertNewUser(Connection connection, String username, String password) throws SQLException {
        String query = "INSERT INTO signup (username, password) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            statement.setString(2, password);
            statement.executeUpdate();
        }
    }
  
    private static void addMovie(Connection connection, Scanner scanner) throws SQLException {
        System.out.println("=== Add New Movie ===");

        System.out.print("Enter movie name: ");
        String movieName = scanner.nextLine();

        System.out.print("Enter genre: ");
        String genre = scanner.nextLine();

        System.out.print("Enter release date (yyyy-MM-dd HH:mm:ss): ");
        String releaseDateStr = scanner.nextLine();
        Date releaseDate;
        try {
            releaseDate = DATE_FORMAT.parse(releaseDateStr);
        } catch (java.text.ParseException e) {
            System.out.println("Invalid date format. Movie addition aborted.");
            return;
        }

        System.out.print("Enter movie duration (in minutes): ");
        int duration = scanner.nextInt();
        scanner.nextLine(); 
        MovieManager.addMovie(connection, movieName, genre, releaseDate, duration);
        System.out.println("Movie added successfully!");
    }

   

        private static void updateMovie(Connection connection, Scanner scanner) {
            System.out.println("=== Update Movie ===");
            System.out.print("Enter the movie ID to update: ");
            int movieId = scanner.nextInt();
            scanner.nextLine(); 

            try {
               
                Movie movie = MovieManager.getMovieById(connection, movieId);

                if (movie != null) {
                    System.out.println("Current Movie Details:");
                    System.out.println(movie);

                    System.out.print("Enter updated movie name (Enter to skip): ");
                    String movieName = scanner.nextLine();
                    if (!movieName.isEmpty()) {
                        movie.setMovieName(movieName);
                    }

                    System.out.print("Enter updated genre (Enter to skip): ");
                    String genre = scanner.nextLine();
                    if (!genre.isEmpty()) {
                        movie.setGenre(genre);
                    }

                    System.out.print("Enter updated release date (yyyy-MM-dd HH:mm:ss) (Enter to skip): ");
                    String releaseDateStr = scanner.nextLine();
                    if (!releaseDateStr.isEmpty()) {
                        Date releaseDate = DATE_FORMAT.parse(releaseDateStr);
                        movie.setReleaseDate(releaseDate);
                    }

                    System.out.print("Enter updated duration (in minutes) (Enter 0 to skip): ");
                    int duration = scanner.nextInt();
                    scanner.nextLine(); 
                    if (duration > 0) {
                        movie.setDuration(duration);
                    }

                   
                    MovieManager.updateMovie(connection, movie);
                    System.out.println("Movie details updated successfully!");
                } else {
                    System.out.println("Movie with ID " + movieId + " not found.");
                }
            } catch (Exception e) {
                System.err.println("An error occurred while updating the movie.");
                e.printStackTrace();
            }
        }
     

        private static void deleteMovie(Connection connection, Scanner scanner) {
            System.out.println("=== Delete Movie ===");
            System.out.print("Enter the movie ID to delete: ");
            int movieId = scanner.nextInt();
            scanner.nextLine();

            try {
               
                Movie movie = MovieManager.getMovieById(connection, movieId);

                if (movie != null) {
                    System.out.println("Are you sure you want to delete the following movie?");
                    System.out.println(movie);
                    System.out.print("Enter 'Y' to confirm deletion, any other key to cancel: ");
                    String confirmation = scanner.nextLine().trim();

                    if (confirmation.equalsIgnoreCase("Y")) {
               
                        MovieManager.deleteMovie(connection, movieId);
                        System.out.println("Movie deleted successfully!");
                    } else {
                        System.out.println("Deletion canceled.");
                    }
                } else {
                    System.out.println("Movie with ID " + movieId + " not found.");
                }
            } catch (Exception e) {
                System.err.println("An error occurred while deleting the movie.");
            }
        }

        private static void searchMovies(Connection connection, String keyword) {
            try {
                List<Movie> movies = MovieManager.searchMovies(connection, keyword);

                if (!movies.isEmpty()) {
                    System.out.println("=== Search Results ===");
                    for (Movie movie : movies) {
                        System.out.println(movie);
                        System.out.println("----------------------------");
                    }
                } else {
                    System.out.println("No movies found matching the search criteria.");
                }
            } catch (SQLException e) {
                System.err.println("An error occurred while searching for movies.");
                e.printStackTrace();
            }
        }
        private static void bookTickets(Connection connection, Scanner scanner) {
            System.out.println("=== Book Tickets ===");

            try {
                List<Show> availableShows = getAvailableShows(connection);

                if (availableShows.isEmpty()) {
                    System.out.println("No available shows found. Please try again later.");
                    return;
                }

                System.out.println("=== Available Shows ===");
                for (Show show : availableShows) {
                    System.out.println(show);
                    System.out.println("--------------------");
                }

                System.out.print("Enter the show ID for which you want to book tickets: ");
                int showId = scanner.nextInt();
                scanner.nextLine(); // Consume newline left-over

                Show selectedShow = getShowById(connection, showId);
                

                System.out.println("=== Show Details ===");
                System.out.println(selectedShow);
                System.out.println("--------------------");

                System.out.print("Enter your name: ");
                String customerName = scanner.nextLine();

                System.out.print("Enter the number of seats you want to book: ");
                int bookedSeats = scanner.nextInt();
                scanner.nextLine();

                if (bookedSeats <= 0 || bookedSeats > selectedShow.getAvailableSeats()) {
                    System.out.println("Invalid number of seats. Please try again.");
                    return;
                }

                int updatedSeats = selectedShow.getAvailableSeats() - bookedSeats;
                try {
                    updateAvailableSeats(connection, showId, updatedSeats);
                    insertBooking(connection, showId, customerName, bookedSeats);
                    System.out.println("Booking successful!");

                    // Direct to the payment page and calculate total amount
                    double ticketPrice = calculateTicketPrice(connection, selectedShow.getMovieId(), bookedSeats);

                    System.out.println("=== Payment Page ===");
                    System.out.println("Total Amount: ₹ " + ticketPrice );

                    // Display the tickets
                    System.out.println("=== Your Tickets ===");
                    System.out.println("Show ID: " + selectedShow.getShowId());
                    System.out.println("Movie ID: " + selectedShow.getMovieId());
                    
                    System.out.println("Show Time: " + selectedShow.getShowTime());
                    System.out.println("Customer Name: " + customerName);
                    System.out.println("Number of Seats Booked: " + bookedSeats);
                    System.out.println("Total Amount: ₹ " + ticketPrice );

                } catch (SQLException e) {
                    System.err.println("An error occurred while booking tickets.");
                }
            } catch (SQLException e) {
                System.err.println("An error occurred while fetching available shows.");
                e.printStackTrace();
            }
        }
        private static OnlineBooking createOnlineBooking(Scanner scanner) {
            OnlineBooking onlineBooking = new OnlineBooking();
            System.out.print("Enter Booking ID: ");
            onlineBooking.setBookingId(scanner.nextInt());
            System.out.print("Enter Show ID: ");
            onlineBooking.setShowId(scanner.nextInt());
            scanner.nextLine(); // Consume newline character
            System.out.print("Enter Customer Name: ");
            onlineBooking.setCustomerName(scanner.nextLine());
            System.out.print("Enter Booked Seats: ");
            onlineBooking.setBookedSeats(scanner.nextInt());
            scanner.nextLine(); // Consume newline character
            System.out.print("Enter Payment Method: ");
            onlineBooking.setPaymentMethod(scanner.nextLine());
            System.out.print("Enter Email: ");
            onlineBooking.setEmail(scanner.nextLine());
            return onlineBooking;
        }

        // Helper method to create an OfflineBooking object using user input
        private static OfflineBooking createOfflineBooking(Scanner scanner) {
            OfflineBooking offlineBooking = new OfflineBooking();
            System.out.print("Enter Booking ID: ");
            offlineBooking.setBookingId(scanner.nextInt());
            System.out.print("Enter Show ID: ");
            offlineBooking.setShowId(scanner.nextInt());
            scanner.nextLine(); // Consume newline character
            System.out.print("Enter Customer Name: ");
            offlineBooking.setCustomerName(scanner.nextLine());
            System.out.print("Enter Booked Seats: ");
            offlineBooking.setBookedSeats(scanner.nextInt());
            scanner.nextLine(); // Consume newline character
            System.out.print("Enter Payment Method: ");
            offlineBooking.setPaymentMethod(scanner.nextLine());
          
            return offlineBooking;
        }
       
        private static List<Show> getAvailableShows(Connection connection) throws SQLException {
            List<Show> availableShows = new ArrayList<>();
            String query = "SELECT * FROM Shows WHERE available_seats > 0";
            try (PreparedStatement statement = connection.prepareStatement(query);
                 ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int showId = resultSet.getInt("show_id");
                    int movieId = resultSet.getInt("movie_id");
                    Date showTime = resultSet.getTimestamp("show_time");
                    int availableSeats = resultSet.getInt("available_seats");

                    Show show = new Show();
                    show.setShowId(showId);
                    show.setMovieId(movieId);
                    show.setShowTime(showTime);
                    show.setAvailableSeats(availableSeats);

                    availableShows.add(show);
                }
            }
            return availableShows;
        }

        private static void insertBooking(Connection connection, int showId, String customerName, int bookedSeats) throws SQLException {
            String query = "INSERT INTO Bookings (show_id, customer_name, booked_seats) VALUES (?, ?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(query)) {
                statement.setInt(1, showId);
                statement.setString(2, customerName);
                statement.setInt(3, bookedSeats);
                statement.executeUpdate();
            }
        }

        private static void updateAvailableSeats(Connection connection, int showId, int availableSeats) throws SQLException {
            String query = "UPDATE Shows SET available_seats = ? WHERE show_id = ?";
            try (PreparedStatement statement = connection.prepareStatement(query)) {
                statement.setInt(1, availableSeats);
                statement.setInt(2, showId);
                statement.executeUpdate();
            }
        }

        private static Show getShowById(Connection connection, int showId) throws SQLException {
            String query = "SELECT * FROM Shows WHERE show_id = ?";
            try (PreparedStatement statement = connection.prepareStatement(query)) {
                statement.setInt(1, showId);
                try (ResultSet resultSet = statement.executeQuery()) {
                    if (resultSet.next()) {
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

                        return show;
                    }
                }
            }
            return null;
        }
        private static void addShow(Connection connection, Scanner scanner) {
            System.out.println("=== Add Show ===");

            try {
                // Show available movies to the admin
                List<Movie> availableMovies = ShowManager.getAllMovies(connection);

                if (availableMovies.isEmpty()) {
                    System.out.println("No movies available to create shows for. Please add movies first.");
                    return;
                }

                // Display available movies
                System.out.println("=== Available Movies ===");
                for (Movie movie : availableMovies) {
                    System.out.println(movie);
                    System.out.println("--------------------");
                }

                System.out.print("Enter the movie ID for which you want to add a show: ");
                int movieId = scanner.nextInt();
                System.out.print("Enter the movie name or which you want to add a show: ");
                String movieName = scanner.next();
                scanner.nextLine(); 
                if (MovieManager.getMovieById(connection, movieId) == null) {
                    System.out.println("Movie with ID " + movieId + " not found.");
                    return;
                }

                System.out.print("Enter show time (yyyy-MM-dd HH:mm:ss): ");
                String showTimeStr = scanner.nextLine();
                Date showTime;
                try {
                    showTime = DATE_FORMAT.parse(showTimeStr);
                } catch (java.text.ParseException e) {
                    System.out.println("Invalid date format. Show addition aborted.");
                    return;
                }

                System.out.print("Enter available seats: ");
                int availableSeats = scanner.nextInt();
                scanner.nextLine();
                ShowManager.addShow(connection, movieId,movieName, showTime, availableSeats);
                System.out.println("Show added successfully!");
            } catch (SQLException e) {
                System.err.println("An error occurred while adding the show.");
                e.printStackTrace();
            }
        }
        private static void updateShow(Connection connection, Scanner scanner) {
            System.out.println("=== Update Show ===");
            System.out.print("Enter the show ID to update: ");
            int showId = scanner.nextInt();
            scanner.nextLine(); 

            try {
           
                Show show = ShowManager.getShowById(connection, showId);

                if (show != null) {
                    System.out.println("Current Show Details:");
                    System.out.println(show);

                    System.out.print("Enter updated movie ID (Enter 0 to skip): ");
                    int movieId = scanner.nextInt();
                    scanner.nextLine(); 
                    if (movieId > 0) {
                        show.setMovieId(movieId);
                    }

                    System.out.print("Enter updated show time (yyyy-MM-dd HH:mm:ss) (Enter to skip): ");
                    String showTimeStr = scanner.nextLine();
                    if (!showTimeStr.isEmpty()) {
                        Date showTime = DATE_FORMAT.parse(showTimeStr);
                        show.setShowTime(showTime);
                    }

                    System.out.print("Enter updated available seats (Enter 0 to skip): ");
                    int availableSeats = scanner.nextInt();
                    scanner.nextLine();
                    if (availableSeats >= 0) {
                        show.setAvailableSeats(availableSeats);
                    }

       
                    ShowManager.updateShow(connection, show);
                    System.out.println("Show details updated successfully!");
                } else {
                    System.out.println("Show with ID " + showId + " not found.");
                }
            } catch (Exception e) {
                System.err.println("An error occurred while updating the show.");
                e.printStackTrace();
            }
        }
        
        private static void deleteShow(Connection connection, Scanner scanner) {
            System.out.println("=== Delete Show ===");
            System.out.print("Enter the show ID to delete: ");
            int showId = scanner.nextInt();
            scanner.nextLine(); 

            try {
           
                Show show = ShowManager.getShowById(connection, showId);

                if (show != null) {
                    System.out.println("Are you sure you want to delete the following show?");
                    System.out.println(show);
                    System.out.print("Enter 'Y' to confirm deletion, any other key to cancel: ");
                    String confirmation = scanner.nextLine().trim();

                    if (confirmation.equalsIgnoreCase("Y")) {
                    
                        ShowManager.deleteShow(connection, showId);
                        System.out.println("Show deleted successfully!");
                    } else {
                        System.out.println("Deletion canceled.");
                    }
                } else {
                    System.out.println("Show with ID " + showId + " not found.");
                }
            } catch (Exception e) {
                System.err.println("An error occurred while deleting the show.");
            }
        }
        
        private static void guestMenu(Connection connection, Scanner scanner) {
            while (true) {
                System.out.println("===== Guest Choices =====");
                System.out.println("1. Search Movies");
                System.out.println("2. View Shows");
                System.out.println("3. Move to homepage");
                System.out.print("Enter your choice: ");
                int guestChoice = scanner.nextInt();
                scanner.nextLine();

                switch (guestChoice) {
                    case 1:
                        System.out.print("Enter the search keyword: ");
                        String keyword = scanner.nextLine();
                        searchMovies(connection, keyword);
                        break;
                    case 2:
                        viewShows(connection);
                        break;
                    case 3:
                        return;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }
        }

        private static void viewShows(Connection connection) {
            try {
                List<Show> shows = ShowManager.getAllShows(connection);

                if (!shows.isEmpty()) {
                    System.out.println("=== Available Shows ===");
                    for (Show show : shows) {
                        System.out.println(show);
                        System.out.println("--------------------");
                    }
                } else {
                    System.out.println("No shows available at the moment.");
                }
            } catch (SQLException e) {
                System.err.println("An error occurred while fetching available shows.");
                e.printStackTrace();
            }
        }

      
		
		private static double calculateTicketPrice(Connection connection, int movieId, int bookedSeats) throws SQLException {
		    double movieBasePrice = 0.0; // Default base price for the movie
		    double seatPrice = 100.0; // Default seat price

		    double totalAmount = movieBasePrice + (bookedSeats * seatPrice);

		    return totalAmount;
		}

}