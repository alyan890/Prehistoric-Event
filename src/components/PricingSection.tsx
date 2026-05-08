'use client';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-light px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">The Package</h2>
          <p className="mx-auto max-w-3xl text-[#4b3a29] text-lg">
            A simple overview of the main dinosaur experience and available add-ons.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border border-[#5c4a31]/20 bg-[#f7efdf]/94 shadow-2xl ring-1 ring-white/35 overflow-hidden">
          <div className="bg-[#efe0c5]/92 border-b border-[#5c4a31]/15 px-5 py-4 sm:px-6">
            <div className="grid grid-cols-1 gap-3 text-[#2f2418] sm:grid-cols-[1.1fr_0.8fr_1.8fr] sm:gap-0 sm:text-sm sm:font-semibold sm:uppercase sm:tracking-[0.22em]">
              <div>Package</div>
              <div className="sm:border-l sm:border-[#5c4a31]/15 sm:pl-6">Price</div>
              <div className="sm:border-l sm:border-[#5c4a31]/15 sm:pl-6">Details</div>
            </div>
          </div>

          <div className="divide-y divide-[#5c4a31]/15">
            <div className="grid grid-cols-1 gap-4 px-5 py-5 text-[#2f2418] sm:grid-cols-[1.1fr_0.8fr_1.8fr] sm:gap-0 sm:px-0 sm:py-0">
              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Package
                </span>
                <p className="text-lg font-semibold leading-tight">Raptor Visit</p>
              </div>

              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Price
                </span>
                <p className="text-lg font-semibold text-[#c15f1e]">Starting at $200</p>
              </div>

              <div className="sm:px-6 sm:py-5">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Details
                </span>
                <p className="max-w-4xl text-[0.98rem] leading-7 text-[#4b3927]">
                  Includes 30 minutes of fun with Venice the Velociraptor, dinosaur wrangler, music/lights entrance, games, photos, and birthday fun.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-5 py-5 text-[#2f2418] sm:grid-cols-[1.1fr_0.8fr_1.8fr] sm:gap-0 sm:px-0 sm:py-0">
              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Package
                </span>
                <p className="text-lg font-semibold leading-tight">Add-On Time</p>
              </div>

              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Price
                </span>
                <p className="text-lg font-semibold text-[#c15f1e]">+$100</p>
              </div>

              <div className="sm:px-6 sm:py-5">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Details
                </span>
                <p className="max-w-4xl text-[0.98rem] leading-7 text-[#4b3927]">
                  Add an extra 30 minutes for more games, photos, and dino excitement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-5 py-5 text-[#2f2418] sm:grid-cols-[1.1fr_0.8fr_1.8fr] sm:gap-0 sm:px-0 sm:py-0">
              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Package
                </span>
                <p className="text-lg font-semibold leading-tight">Availability</p>
              </div>

              <div className="sm:px-6 sm:py-5 sm:border-r sm:border-[#5c4a31]/15">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Price
                </span>
                <p className="text-lg font-semibold text-[#c15f1e]">Saturday &amp; Sunday</p>
              </div>

              <div className="sm:px-6 sm:py-5">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6e5a40] sm:hidden">
                  Details
                </span>
                <p className="max-w-4xl text-[0.98rem] leading-7 text-[#4b3927]">
                  Booking hours: 10:00 AM – 10:00 PM. Weekday events may be available by request.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-[#5c4a31]/15 bg-[#f2e5cd]/70 px-5 py-4 text-center text-[#4b3927] shadow-sm backdrop-blur-[1px] sm:px-8">
          <p className="text-base sm:text-lg">
            Book your unforgettable dinosaur experience today — perfect for birthdays, schools, libraries, and special events!
          </p>
        </div>
      </div>
    </section>
  );
}