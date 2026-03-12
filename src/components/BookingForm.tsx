'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    package: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will be in touch within 24 hours.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Event Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Event Type</label>
        <select name="eventType" value={formData.eventType} onChange={handleChange} required className="form-input">
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
        <select name="package" value={formData.package} onChange={handleChange} required className="form-input">
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
          value={formData.guests}
          onChange={handleChange}
          placeholder="Number of guests"
          min="1"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700 font-semibold mb-1">Additional Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special requests or questions..."
          rows={4}
          className="form-input"
        />
      </div>

      <button type="submit" className="btn-booking">
        Submit Booking Request
      </button>
    </form>
  );
}
