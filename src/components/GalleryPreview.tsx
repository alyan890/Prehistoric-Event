'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPreview() {
  const images = [
    {
      id: 1,
      src: '/Capture.PNG',
      title: 'Grand Entrance Moment',
      review: 'Crowd reactions were instant. This entrance created the wow-factor everyone remembers.',
    },
    {
      id: 2,
      src: '/Capture2.PNG',
      title: 'Close-Up Dino Encounter',
      review: 'Guests loved getting face-to-face with the dinosaur in a safe and exciting setup.',
    },
    {
      id: 4,
      src: '/Capture4.PNG',
      title: 'School Event Favorite',
      review: 'Students stayed fully engaged, mixing fun and learning throughout the appearance.',
    },
    {
      id: 5,
      src: '/Capture5.PNG',
      title: 'Festival Main Attraction',
      review: 'The dino appearance pulled people in and kept the energy high all day long.',
    },
    {
      id: 6,
      src: '/Capture6.PNG',
      title: 'Interactive Performance',
      review: 'Guests got authentic reactions, photos, and interactive moments in one experience.',
    },
    {
      id: 7,
      src: '/Capture7.PNG',
      title: 'Family Crowd Engagement',
      review: 'Parents and kids joined together, making this a true all-ages entertainment moment.',
    },
    {
      id: 8,
      src: '/Capture8.PNG',
      title: 'Live Show Energy',
      review: 'This setup delivered a strong stage presence and nonstop audience excitement.',
    },
    {
      id: 9,
      src: '/Capture9.PNG',
      title: 'Community Event Success',
      review: 'A perfect fit for public events where memorable visuals and engagement matter most.',
    },
    {
      id: 10,
      src: '/Capture10.PNG',
      title: 'Premium Party Scene',
      review: 'A cinematic moment that made the event feel bigger and more immersive.',
    },
    {
      id: 11,
      src: '/Capture11.PNG',
      title: 'Meet & Greet Snapshot',
      review: 'Guests lined up for photos, and every interaction felt personal and exciting.',
    },
    {
      id: 12,
      src: '/Capture12.PNG',
      title: 'Museum-Style Activation',
      review: 'Great for educational and themed spaces where realism makes the experience special.',
    },
    {
      id: 13,
      src: '/Capture13.PNG',
      title: 'Street Fair Feature',
      review: 'This appearance boosted foot traffic and became one of the event top attractions.',
    },
    {
      id: 14,
      src: '/Capture14.PNG',
      title: 'Showtime Finale',
      review: 'A strong closing visual that leaves guests talking long after the event ends.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section-light px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title text-left! mb-4!">Photo Gallery</h2>
          <p className="text-[#3f3120] text-lg">A few of our Velociraptor moments in action.</p>
        </div>

        <div className="relative mb-8 overflow-hidden rounded-2xl border border-black/15 shadow-2xl bg-black/10">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="min-w-full">
                <div className="relative aspect-video sm:aspect-video">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />

                  <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block bg-black/55 backdrop-blur-sm rounded-xl px-4 py-3 max-w-2xl">
                      <p className="text-white font-bold text-lg sm:text-xl">{image.title}</p>
                      <p className="text-[#f3e8d1] text-sm sm:text-base mt-1">{image.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/20 flex items-center justify-center transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/20 flex items-center justify-center transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-10 gap-2 sm:gap-3 mb-12">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-lg border transition ${
                index === activeIndex
                  ? 'border-dino-orange ring-2 ring-dino-orange/40'
                  : 'border-black/15 hover:border-black/35'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-16 sm:h-20 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
