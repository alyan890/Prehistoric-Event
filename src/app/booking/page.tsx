import BookingForm from '@/components/BookingForm';

type BookingPageProps = {
  searchParams?: Promise<{ submitted?: string }>;
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const isSubmitted = params?.submitted === '1';

  return (
    <main className="section-light py-0!">
      <section className="section-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">More than entertainment, it&apos;s a Prehistoric Experience</h1>
        </div>
      </section>

      <section className="section-light px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {isSubmitted && (
            <div className="mb-6 rounded-lg border border-green-700/40 bg-green-100 px-4 py-3 text-green-900">
              Thank you! Your booking request was sent successfully. We will contact you within 24 hours.
            </div>
          )}

          <div className="bg-[#efe2cc] border border-black/20 rounded-lg p-6 md:p-8">
            <BookingForm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
              <h3 className="text-dino-orange font-bold text-lg mb-2">Response Time</h3>
              <p className="text-gray-700">We&apos;ll confirm your booking within 24 hours.</p>
            </div>

            <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
              <h3 className="text-dino-olive font-bold text-lg mb-2">Flexible Dates</h3>
              <p className="text-gray-700">Available year-round for your special event.</p>
            </div>

            <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
              <h3 className="text-dino-gold font-bold text-lg mb-2">Professional Team</h3>
              <p className="text-gray-700">Experienced handlers ensure safe interactions.</p>
            </div>
          </div>

          <div id="faq" className="mt-16">
            <h2 className="section-title mb-8!">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
                <h3 className="text-gray-800 font-semibold text-lg mb-3">What events do you service?</h3>
                <p className="text-gray-700">
                  We service birthday parties, corporate events, festivals, school events, meet & greets, and any special occasion where you want to wow your guests.
                </p>
              </div>

              <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
                <h3 className="text-gray-800 font-semibold text-lg mb-3">Is the Velociraptor safe?</h3>
                <p className="text-gray-700">
                  Absolutely! Our professional handlers ensure all interactions are safe and appropriate for guests of all ages. The animatronic is fully controlled and cannot cause harm.
                </p>
              </div>

              <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
                <h3 className="text-gray-800 font-semibold text-lg mb-3">How far do you travel?</h3>
                <p className="text-gray-700">
                  We service events within a 100-mile radius of our location, with travel fees for events beyond that range. Contact us for specific details.
                </p>
              </div>

              <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
                <h3 className="text-gray-800 font-semibold text-lg mb-3">What&apos;s the booking deposit?</h3>
                <p className="text-gray-700">
                  A 50% deposit is required to secure your date, with the balance due one week before your event. We accept all major payment methods.
                </p>
              </div>

              <div className="bg-white/60 border border-black/20 p-6 rounded-lg">
                <h3 className="text-gray-800 font-semibold text-lg mb-3">Can we customize the appearance?</h3>
                <p className="text-gray-700">
                  Yes! The package includes meet & greet moments, entrance performances, and photo opportunities. Contact us to discuss add-ons and your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
