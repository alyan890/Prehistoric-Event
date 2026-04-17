import Link from 'next/link';

export default function Hero() {
  const isLoaded = true;

  return (
    <section className="hero-section px-4">
      <div className="hero-content">
        <h1
          className={`hero-title transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Will make your Party go down in History
        </h1>

        <p
          className={`hero-subtitle transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Interactive dinosaur experiences, unforgettable parties, and thrilling prehistoric encounters for all ages.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/booking" className="btn-orange text-center">
            Book a Party
          </Link>
          <Link href="/#packages" className="btn-green text-center">
            View Package
          </Link>
        </div>
      </div>
    </section>
  );
}
