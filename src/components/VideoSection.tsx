'use client';

export default function VideoSection() {
  return (
    <section id="videos" className="section-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Watch the Magic</h2>
          <p className="text-dino-tan text-lg">See our Velociraptor in action</p>
        </div>

        <div className="relative overflow-hidden rounded-lg aspect-video bg-black/30 border border-white/20">
          <video
            className="w-full h-full object-cover"
            controls
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/Marta%20Raptor%20Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/25 border border-white/20 p-6 rounded-lg">
            <h3 className="text-dino-gold font-bold text-lg mb-2">Performance Clips</h3>
            <p className="text-dino-tan">Watch highlights from recent events and appearances.</p>
          </div>
          <div className="bg-black/25 border border-white/20 p-6 rounded-lg">
            <h3 className="text-dino-gold font-bold text-lg mb-2">Behind the Scenes</h3>
            <p className="text-dino-tan">See how we prepare and train for every experience.</p>
          </div>
          <div className="bg-black/25 border border-white/20 p-6 rounded-lg">
            <h3 className="text-dino-gold font-bold text-lg mb-2">Testimonials</h3>
            <p className="text-dino-tan">Hear from clients about unforgettable moments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
