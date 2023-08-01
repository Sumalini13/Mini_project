package booking;


	public class OfflineBooking extends Booking {
	    private String paymentMethod;
	    private String paymentLocation;

	    // Constructors, getters, and setters specific to OfflineBooking
	    // ...

	    // Providing the implementation for the abstract method from the base class
	    @Override
	   
	    public String getPaymentMethod() {
	        return paymentMethod;
	    }

	    public void setPaymentMethod(String paymentMethod) {
	        this.paymentMethod = paymentMethod;
	    }

	    public String getPaymentLocation() {
	        return paymentLocation;
	    }

	    public void setPaymentLocation(String paymentLocation) {
	        this.paymentLocation = paymentLocation;
	    }
	    // Additional toString() method for displaying offline booking details
	    @Override
	    public String toString() {
	        return super.toString() +
	               "\nPayment Method: " + paymentMethod +
	               "\nPayment Location: " + paymentLocation;
	    }
	}


