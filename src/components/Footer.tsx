import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BLUR_DATA_URL } from '@/lib/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/WhatsApp_Image_2026-03-11_at_10.04.03_PM-removebg-preview.png"
                alt="Prehistoric Parties logo"
                width={32}
                height={32}
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                quality={65}
                sizes="32px"
                className="w-8 h-8 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
              />
              <span className="text-white font-bold">Prehistoric Parties</span>
            </div>
            <p className="text-dino-tan text-sm">Creating unforgettable prehistoric adventures for all ages.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dino-tan hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-dino-tan hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-dino-tan hover:text-white transition">
                  Book Event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-dino-tan text-sm">Dinosaur Parties</li>
              <li className="text-dino-tan text-sm">School Events</li>
              <li className="text-dino-tan text-sm">Festivals</li>
              <li className="text-dino-tan text-sm">Private Events</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-dino-tan text-sm">
                <Phone size={16} className="mr-2 text-dino-gold" />
                <a href="tel:2394906949" className="hover:text-white transition">239-490-6949</a>
              </div>
              <div className="flex items-center text-dino-tan text-sm">
                <Mail size={16} className="mr-2 text-dino-gold" />
                <a href="mailto:Prehistoricpartiesandevents@gmail.com" className="hover:text-white transition">Prehistoricpartiesandevents@gmail.com</a>
              </div>
              <div className="flex items-start text-dino-tan text-sm">
                <MapPin size={16} className="mr-2 mt-1 text-dino-gold shrink-0" />
                <span>Fort Myers, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-dino-tan text-sm">
            &copy; {currentYear} Prehistoric Parties and Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
