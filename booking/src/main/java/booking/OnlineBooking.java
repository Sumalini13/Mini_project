package booking;

public class OnlineBooking {

	    private int bookingId;
	    private int showId;
	    private String customerName;
	    public String getPaymentLocation() {
			return paymentLocation;
		}

		public void setPaymentLocation(String paymentLocation) {
			this.paymentLocation = paymentLocation;
		}
		String paymentLocation;
	    private int bookedSeats;
	    private String paymentMethod;
	    private String email;

	    // Constructors
	    public OnlineBooking() {
	    }

	    public OnlineBooking(int bookingId, int showId, String customerName, int bookedSeats, String paymentMethod, String email) {
	        this.bookingId = bookingId;
	        this.showId = showId;
	        this.customerName = customerName;
	        this.bookedSeats = bookedSeats;
	        this.paymentMethod = paymentMethod;
	        this.email = email;
	    }

	    // Getters and setters
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

	    public String getPaymentMethod() {
	        return paymentMethod;
	    }

	    public void setPaymentMethod(String paymentMethod) {
	        this.paymentMethod = paymentMethod;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }
	    @Override
	    public String toString() {
			return super.toString() +
	               "\nPayment Method: " + paymentMethod +
	               "\nPayment Location: " + paymentLocation;
	    }
	 
	}


