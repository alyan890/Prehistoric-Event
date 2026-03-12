'use client';

import { ArrowRight } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="section-light px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-[#f2e4cb]/96 text-[#2f2418] rounded-lg p-8 md:p-12 border border-black/15 shadow-2xl ring-1 ring-white/35">
        <h2 className="section-title mb-4!">Book Your Prehistoric Event</h2>
        <p className="text-center text-[#4b3927] mb-10 max-w-3xl mx-auto">
          Ready to create a roaring experience for your guests? Reserve our 13ft animatronic Velociraptor and make your event unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/booking" className="inline-flex items-center btn-orange group">
            Request Booking
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
