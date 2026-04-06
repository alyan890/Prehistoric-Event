'use client';

import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image';

export default function AboutSection() {
  return (
    <section className="section-about-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg border-4 border-black/20 shadow-2xl ring-1 ring-white/25">
            <Image
              src="/Capture2.PNG"
              alt="Animatronic Raptor"
              width={1000}
              height={1000}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              quality={72}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full aspect-square object-cover object-top"
            />
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#2d2117]/58 p-6 shadow-2xl backdrop-blur-[2px] md:p-8">
            <div className="section-copy space-y-4 text-lg mb-8">
              <p>
                Prehistoric Parties &amp; Events brings dinosaurs to life through realistic, interactive experiences that turn ordinary gatherings into unforgettable memories.
              </p>

              <p>
                We specialize in lifelike dinosaur appearances for birthday parties, school events, festivals, and special occasions. Every experience is handled by trained professionals, ensuring safe, engaging, and exciting interaction for guests of all ages.
              </p>

              <p>
                This isn't just a costume - it's an immersive prehistoric experience designed to wow crowds, spark imagination, and create moments people will never forget.
              </p>

              <p>More than entertainment.</p>

              <p>It's a prehistoric experience.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
