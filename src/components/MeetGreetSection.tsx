'use client';

import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import { BLUR_DATA_URL } from '@/lib/image';

export default function MeetGreetSection() {
  const appearances = [
    {
      location: 'Downtown Festival',
      date: 'March 15, 2026',
      time: '2:00 PM - 5:00 PM',
      description: 'Free public meet and greet event',
      image: '/Capture11.PNG',
    },
    {
      location: 'Jurassic Park Museum',
      date: 'March 22, 2026',
      time: '11:00 AM - 3:00 PM',
      description: 'Indoor exhibition event',
      image: '/Capture12.PNG',
    },
    {
      location: 'Community Street Fair',
      date: 'April 5, 2026',
      time: '10:00 AM - 6:00 PM',
      description: 'Outdoor carnival event',
      image: '/Capture13.PNG',
    },
  ];

  return (
    <section id="meet-greet" className="section-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet &amp; Greet Events</h2>
          <p className="text-dino-tan text-lg">Upcoming public appearances where you can meet the Velociraptor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appearances.map((event) => (
            <div
              key={event.location}
              className="group bg-black/22 backdrop-blur-[1px] border border-white/20 rounded-lg p-8 shadow-xl"
            >
              <Image
                src={event.image}
                alt={event.location}
                width={900}
                height={600}
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                quality={70}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-40 object-cover rounded-md border border-white/25 mb-5"
              />

              <div className="flex items-start mb-4">
                <MapPin className="text-dino-gold mr-3 shrink-0 mt-1" size={20} />
                <h3 className="text-xl font-bold text-white">{event.location}</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-dino-tan">
                  <Calendar size={16} className="text-dino-gold mr-3" />
                  <span>{event.date}</span>
                </div>
                <p className="text-dino-tan/80 text-sm">{event.time}</p>
              </div>

              <p className="text-dino-tan mb-6">{event.description}</p>

              <button className="w-full bg-dino-olive hover:bg-green-800 text-white font-semibold py-2 rounded transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black/35 border border-white/20 rounded-lg p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Don&apos;t Miss Out</h3>
          <p className="text-dino-tan mb-6">Subscribe for upcoming appearances.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/90 border border-black/20 text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button className="btn-orange">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
