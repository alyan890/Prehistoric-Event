'use client';

import Image from 'next/image';
import { BookOpen, Briefcase, Cake, Music } from 'lucide-react';
import { BLUR_DATA_URL } from '@/lib/image';

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
                <Image
                  src={event.image}
                  alt={event.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  quality={70}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto max-h-56 object-contain object-center sm:h-36 sm:max-h-none sm:object-cover rounded-md border border-black/15 mb-4 bg-[#efe2c9] p-2"
                />
                <Icon className="w-10 h-10 text-[#3a2c1d] mb-3" />
                <h3 className="text-lg font-bold text-[#2f2418] mb-2">{event.title}</h3>
                <p className="text-[#4a3b28] text-sm">{event.description}</p>
              </div>
            );
          })}
        </div>

        <h3 className="section-title mb-8!">The Package</h3>
        <div className="max-w-4xl mx-auto">
          <div className="package-card ultimate text-left">
            <h3>🦖 Prehistoric Parties – Velociraptor Adventure Package 🦖</h3>
            <p className="mb-4">Get ready for a ROARING good time your guests will NEVER forget!</p>
            <p className="mb-4">For just $200 (45 minutes), we bring the ultimate prehistoric experience right to your party…</p>

            <ul>
              <li><strong>Epic Dinosaur Entrance</strong> - Watch jaws drop as our Velociraptor makes a dramatic entrance with lights, music, and fog—it’s like stepping straight into another era!</li>
              <li><strong>Live Dinosaur Show</strong> - Our expert Dinosaur Wrangler takes control (most of the time 😉) and leads an interactive, laugh-out-loud show packed with fun facts, personality, and a little bit of raptor mischief!</li>
              <li><strong>3 Interactive Games</strong> - Kids don’t just watch—they become part of the action! Enjoy three exciting, dinosaur-themed games that get everyone moving, laughing, and engaged.</li>
              <li><strong>Birthday Celebration</strong> - We wrap it all up by gathering around for a special Happy Birthday sing-along—with a Velociraptor guest of honor!</li>
            </ul>

            <p className="mb-4 font-semibold">🔥 It’s thrilling. It’s interactive. It’s unforgettable.</p>
            <p className="mb-4">Because with Prehistoric Parties… your party will go down in HISTORY!</p>
            <p className="mb-4 font-bold">ADD MORE FUN!</p>
            <p className="mb-6">⏱️ +$100 for an additional 30 minutes of prehistoric excitement!</p>

            <a href="/booking" className="inline-block bg-[#fff4df] text-[#2f2418] px-5 py-2 rounded font-bold border border-black/10 shadow-md transition hover:bg-white">Book Your Adventure</a>
          </div>
        </div>
      </div>
    </section>
  );
}
