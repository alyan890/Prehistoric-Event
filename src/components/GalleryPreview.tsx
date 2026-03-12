'use client';

import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  const images = [
    { id: 1, title: 'Dinosaur Birthday Parties' },
    { id: 2, title: 'School & Educational Events' },
    { id: 3, title: 'Festivals & Community Events' },
    { id: 4, title: 'Private Events' },
  ];

  return (
    <section id="gallery" className="section-light px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title text-left! mb-4!">Photo Gallery</h2>
          <p className="text-[#3f3120] text-lg">See our dinosaurs in action at past events</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer border border-black/20 shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-full h-full bg-[#c7b594] relative flex items-center justify-center">
                <div className="text-4xl text-dino-dark/70">Event Photo</div>
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-75 group-hover:opacity-85 transition duration-300" />

              <div className="absolute inset-0 flex items-end p-4 translate-y-2 group-hover:translate-y-0 transition duration-300">
                <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
