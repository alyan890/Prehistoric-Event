'use client';

export default function VendorsSection() {
  const vendors = [
    { name: 'Party Rentals Co.', category: 'Decorations' },
    { name: 'Catering Plus', category: 'Food & Beverage' },
    { name: 'Event Sounds', category: 'Sound & Lighting' },
    { name: 'Photo Moments', category: 'Photography' },
    { name: 'Balloon Arts', category: 'Decorations' },
    { name: 'Entertainment Plus', category: 'Events' },
  ];

  return (
    <section id="vendors" className="section-jungle px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Vendor Partners</h2>
          <p className="text-dino-tan text-lg">Work with our trusted network of event professionals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="group bg-white/20 backdrop-blur-[2px] border border-dino-tan/30 rounded-lg p-8 hover:-translate-y-1 transition shadow-lg hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-dino-olive rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                VP
              </div>

              <h3 className="text-dino-tan font-bold text-lg mb-2">{vendor.name}</h3>
              <p className="text-dino-gold text-sm">{vendor.category}</p>
            </div>
          ))}
        </div>

        <div className="bg-dino-dark rounded-lg p-8 text-center border border-black/30 shadow-2xl ring-1 ring-dino-tan/20">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Partnering?</h3>
          <p className="text-dino-tan mb-6">Help us bring spectacular events to our clients.</p>
          <button className="btn-orange">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
