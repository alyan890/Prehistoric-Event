'use client';

import { BookOpen, Briefcase, Cake, Music } from 'lucide-react';

export default function EventsSection() {
  const events = [
    {
      icon: Cake,
      title: 'Dinosaur Birthday Parties',
      description: 'Make birthdays ROAR! Dino encounters & entertainment.',
      image: '/Capture.PNG',
    },
    {
      icon: BookOpen,
      title: 'School & Educational Events',
      description: 'Interactive prehistoric learning and photo opportunities.',
      image: '/Capture4.PNG',
    },
    {
      icon: Music,
      title: 'Festivals & Community Events',
      description: 'Admirable & Fun. Crowd-drawing dinosaur entertainment.',
      image: '/Capture5.PNG',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Impress with unforgettable branded dinosaur experiences.',
      image: '/Capture6.PNG',
    },
  ];

  return (
    <section id="packages" className="section-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What We Offer</h2>
          <p className="text-[#f5ead6] text-lg">Perfect dinosaur entertainment for any occasion</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                className="bg-[#f5ead8]/95 border border-[#5c4a31]/30 rounded-lg p-6 hover:-translate-y-1 transition shadow-lg hover:shadow-xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto max-h-56 object-contain object-center sm:h-36 sm:max-h-none sm:object-cover rounded-md border border-black/15 mb-4 bg-[#efe2c9] p-2"
                />
                <Icon className="w-10 h-10 text-[#3a2c1d] mb-3" />
                <h3 className="text-lg font-bold text-[#2f2418] mb-2">{event.title}</h3>
                <p className="text-[#4a3b28] text-sm">{event.description}</p>
              </div>
            );
          })}
        </div>

        <h3 className="section-title mb-8!">Party Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="package-card basic">
            <h3>Basic Dino Visit</h3>
            <ul>
              <li>20 minute experience</li>
              <li>Dinosaur meet and greet</li>
              <li>Photo opportunities</li>
              <li>Interactive dinosaur handling</li>
            </ul>
            <a href="/booking" className="inline-block bg-[#fff4df] text-[#2f2418] px-5 py-2 rounded font-bold border border-black/10 shadow-md transition hover:bg-white">Book Your Adventure</a>
          </div>

          <div className="package-card deluxe">
            <h3>Deluxe Dino Party</h3>
            <ul>
              <li>More interaction time</li>
              <li>Multiple dinosaur appearances</li>
              <li>Mini educational show</li>
              <li>Interactive games</li>
            </ul>
            <a href="/booking" className="inline-block bg-[#fff4df] text-[#2f2418] px-5 py-2 rounded font-bold border border-black/10 shadow-md transition hover:bg-white">Book Your Adventure</a>
          </div>

          <div className="package-card ultimate">
            <h3>Ultimate Prehistoric Experience</h3>
            <ul>
              <li>Full interactive dinosaur show</li>
              <li>Multiple dinosaurs</li>
              <li>Pirate sections</li>
              <li>Premium photo session</li>
            </ul>
            <a href="/booking" className="inline-block bg-[#fff4df] text-[#2f2418] px-5 py-2 rounded font-bold border border-black/10 shadow-md transition hover:bg-white">Book Your Adventure</a>
          </div>
        </div>
      </div>
    </section>
  );
}
