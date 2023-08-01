package booking;

public abstract class Booking {
    private int bookingId;
    private int showId;
    private String customerName;
    private int bookedSeats;

    // Constructors, getters, and setters

    // Sample toString() method for displaying booking details
    @Override
    public String toString() {
        return "Booking ID: " + bookingId +
               "\nShow ID: " + showId +
               "\nCustomer Name: " + customerName +
               "\nBooked Seats: " + bookedSeats;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getShowId() {
        return showId;
    }

    public void setShowId(int showId) {
        this.showId = showId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public int getBookedSeats() {
        return bookedSeats;
    }

    public void setBookedSeats(int bookedSeats) {
        this.bookedSeats = bookedSeats;
    }

    // Abstract method for getting payment method
    public abstract String getPaymentMethod();
}
