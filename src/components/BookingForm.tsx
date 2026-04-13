export default function BookingForm() {
  return (
    <form action="https://formspree.io/f/xaqayqed" method="POST" className="space-y-4">
      <input type="hidden" name="_next" value="/booking?submitted=1" />
      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="+1 (555) 000-0000"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Event Date</label>
        <input
          type="date"
          name="eventDate"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Event Location</label>
        <input
          type="text"
          name="eventLocation"
          placeholder="City / Venue"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Event Type</label>
        <select name="eventType" required className="form-input">
          <option value="">Select event type</option>
          <option value="birthday">Birthday Party</option>
          <option value="school">School / Educational</option>
          <option value="festival">Festival / Community</option>
          <option value="corporate">Corporate Event</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Package</label>
        <select name="package" required className="form-input">
          <option value="">Select a package</option>
          <option value="basic">Basic Dino Visit</option>
          <option value="deluxe">Deluxe Dino Party</option>
          <option value="ultimate">Ultimate Prehistoric Experience</option>
        </select>
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Expected Guests</label>
        <input
          type="number"
          name="guests"
          placeholder="Number of guests"
          min="1"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Additional Message</label>
        <textarea
          name="message"
          placeholder="Any special requests or questions..."
          rows={4}
          className="form-input"
        />
      </div>

      <button type="submit" className="btn-booking">Submit Booking Request</button>
    </form>
  );
}
