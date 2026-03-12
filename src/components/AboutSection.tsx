'use client';

export default function AboutSection() {
  return (
    <section className="section-about-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg border-4 border-black/20 shadow-2xl ring-1 ring-white/25">
            <img
              src="/d9889b3d0494e568666622affc72b514.jpg"
              alt="Animatronic Raptor"
              className="w-full aspect-square object-cover object-top"
            />
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#2d2117]/58 p-6 shadow-2xl backdrop-blur-[2px] md:p-8">
            <h2 className="section-title text-left! mb-6!">Welcome to Prehistoric Parties and Events</h2>

            <div className="section-copy space-y-4 text-lg mb-8">
              <p>
                At Prehistoric Parties and Events, we bring the dinosaur world to life! Our interactive dinosaur experiences are
                designed to create unforgettable memories for children and families.
              </p>

              <p>
                From birthday parties and school events to festivals and private celebrations, our realistic dinosaur encounters turn every event into a prehistoric adventure. Our trained dinosaur handlers and lifelike dinosaurs create a fun, safe, and exciting environment where kids can learn, laugh, and explore the age of dinosaurs.
              </p>

              <p>
                Whether it's a thrilling encounter, an educational experience, or simply an unforgettable party highlight, we deliver authentic prehistoric entertainment that guests talk about for years to come.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/88 border border-black/15 p-4 rounded-lg shadow-md">
                <p className="text-dino-orange font-bold text-2xl">100%</p>
                <p className="text-gray-700">Safe &amp; Fun</p>
              </div>
              <div className="bg-white/88 border border-black/15 p-4 rounded-lg shadow-md">
                <p className="text-dino-olive font-bold text-2xl">13ft</p>
                <p className="text-gray-700">Animatronic Raptor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
