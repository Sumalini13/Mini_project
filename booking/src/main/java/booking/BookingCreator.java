package booking;

import java.util.Scanner;
public class BookingCreator {

	
	    public static OnlineBooking createOnlineBooking(Scanner scanner) {
	        OnlineBooking onlineBooking = new OnlineBooking();
	       
	        System.out.print("Enter Show ID: ");
	        onlineBooking.setShowId(scanner.nextInt());
	        scanner.nextLine(); // Consume newline character
	        System.out.print("Enter Customer Name: ");
	        onlineBooking.setCustomerName(scanner.nextLine());
	        System.out.print("Enter Booked Seats: ");
	        onlineBooking.setBookedSeats(scanner.nextInt());
	        scanner.nextLine();
	        System.out.print("Enter Total Amount to Pay ₹:");
	        onlineBooking.setBookingId(scanner.nextInt());// Consume newline character
	        System.out.print("Enter Payment Method: ");
	        onlineBooking.setPaymentMethod(scanner.nextLine());
	        scanner.nextLine();
	        System.out.print("Enter Email: ");
	        onlineBooking.setEmail(scanner.nextLine());
	        return onlineBooking;
	    }

	    public static OfflineBooking createOfflineBooking(Scanner scanner) {
	        OfflineBooking offlineBooking = new OfflineBooking();
	        
	        System.out.print("Enter Show ID: ");
	        offlineBooking.setShowId(scanner.nextInt());
	        scanner.nextLine(); // Consume newline character
	        System.out.print("Enter Customer Name: ");
	        offlineBooking.setCustomerName(scanner.nextLine());
	        System.out.print("Enter Booked Seats: ");
	        offlineBooking.setBookedSeats(scanner.nextInt());
	        scanner.nextLine(); // Consume newline character
	        System.out.print("Enter Total Amount to Pay ₹: ");
	        offlineBooking.setBookingId(scanner.nextInt());
	        System.out.print("Enter Payment Method (Offline): ");
	        offlineBooking.setPaymentMethod(scanner.nextLine());
	        scanner.nextLine();
	        System.out.print("Enter Payment Location: ");
	        offlineBooking.setPaymentLocation(scanner.nextLine());
	        return offlineBooking;
	    }
	}


