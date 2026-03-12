import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import GalleryPreview from '@/components/GalleryPreview';
import VideoSection from '@/components/VideoSection';
import VendorsSection from '@/components/VendorsSection';
import MeetGreetSection from '@/components/MeetGreetSection';
import BookingCTA from '@/components/BookingCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="hero-about-divider" aria-hidden="true" />
      <AboutSection />
      <EventsSection />
      <GalleryPreview />
      <VideoSection />
      <VendorsSection />
      <MeetGreetSection />
      <BookingCTA />
    </main>
  );
}
