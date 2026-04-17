'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BLUR_DATA_URL } from '@/lib/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const eventsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (eventsMenuRef.current && !eventsMenuRef.current.contains(event.target as Node)) {
        setIsEventsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      const normalizedPath = pathPart || '/';
      return pathname === normalizedPath && activeHash === `#${hashPart}`;
    }

    if (href === '/') {
      return pathname === '/' && activeHash === '';
    }

    return pathname === href;
  };

  const navLinkClass = (href: string) =>
    `nav-link transition ${isActiveLink(href) ? 'nav-link-active' : ''}`;

  const eventsActive = pathname === '/' && activeHash === '#packages';

  return (
    <nav className="sticky top-0 z-50 navbar-surface overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex justify-between items-center h-16 overflow-visible">
          <Link href="/" className="relative flex items-center group overflow-visible pl-1">
            <Image
              src="/WhatsApp_Image_2026-03-11_at_10.04.03_PM-removebg-preview.png"
              alt="Prehistoric Events logo"
              width={128}
              height={128}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              quality={70}
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
              className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover scale-125 top-3 sm:top-4 lg:top-5 drop-shadow-[0_10px_16px_rgba(0,0,0,0.58)]"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 relative z-20">
            <Link href="/" className={navLinkClass('/')} onClick={() => setActiveHash('')}>Home</Link>
            <Link href="/#gallery" className={navLinkClass('/#gallery')} onClick={() => setActiveHash('#gallery')}>Gallery</Link>
            <Link href="/#videos" className={navLinkClass('/#videos')} onClick={() => setActiveHash('#videos')}>Videos</Link>
            <Link href="/#vendors" className={navLinkClass('/#vendors')} onClick={() => setActiveHash('#vendors')}>Vendors</Link>
            <Link href="/#meet-greet" className={navLinkClass('/#meet-greet')} onClick={() => setActiveHash('#meet-greet')}>Meet &amp; Greet</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsEventsOpen(true)}
              onMouseLeave={() => setIsEventsOpen(false)}
              ref={eventsMenuRef}
            >
              <button
                className={`nav-link inline-flex items-center gap-1 transition ${eventsActive || isEventsOpen ? 'nav-link-active' : ''}`}
                onClick={() => setIsEventsOpen((prev) => !prev)}
                aria-expanded={isEventsOpen}
                aria-haspopup="menu"
                type="button"
              >
                Events
                <ChevronDown size={16} />
              </button>
              <div
                className={`events-dropdown absolute right-0 top-full mt-1 w-56 rounded shadow-lg transition-all duration-150 ${
                  isEventsOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <Link href="/#packages" className="events-dropdown-item block px-4 py-2 nav-link" onClick={() => { setIsEventsOpen(false); setActiveHash('#packages'); }}>Party Package</Link>
                <Link href="/booking" className="events-dropdown-item block px-4 py-2 nav-link" onClick={() => setIsEventsOpen(false)}>Birthday Parties</Link>
                <Link href="/booking" className="events-dropdown-item block px-4 py-2 nav-link" onClick={() => setIsEventsOpen(false)}>Corporate Events</Link>
                <Link href="/booking" className="events-dropdown-item block px-4 py-2 nav-link" onClick={() => setIsEventsOpen(false)}>School Events</Link>
              </div>
            </div>

            <Link
              href="/booking"
              className="btn-orange px-5 py-2"
            >
              Book Event
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className={`block px-4 py-2 ${navLinkClass('/')}`} onClick={() => setActiveHash('')}>Home</Link>
            <Link href="/#gallery" className={`block px-4 py-2 ${navLinkClass('/#gallery')}`} onClick={() => setActiveHash('#gallery')}>Gallery</Link>
            <Link href="/#videos" className={`block px-4 py-2 ${navLinkClass('/#videos')}`} onClick={() => setActiveHash('#videos')}>Videos</Link>
            <Link href="/#vendors" className={`block px-4 py-2 ${navLinkClass('/#vendors')}`} onClick={() => setActiveHash('#vendors')}>Vendors</Link>
            <Link href="/#meet-greet" className={`block px-4 py-2 ${navLinkClass('/#meet-greet')}`} onClick={() => setActiveHash('#meet-greet')}>Meet &amp; Greet</Link>
            <Link href="/#packages" className={`block px-4 py-2 ${navLinkClass('/#packages')}`} onClick={() => setActiveHash('#packages')}>Party Package</Link>
            <Link
              href="/booking"
              className="block btn-orange text-center"
            >
              Book Event
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
