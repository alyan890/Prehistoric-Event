# Velociraptor Events - 13ft Animatronic Dinosaur Rental Website

A modern, cinematic event booking website built with Next.js 14, React, TypeScript, and Tailwind CSS for a premium animatronic Velociraptor dinosaur rental business.

## 🦖 Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Modern Dark Aesthetic**: Jurassic-inspired dark jungle theme with amber highlights
- **Cinematic Effects**: Fog effects, animations, and custom gradient backgrounds
- **Image Gallery**: Lightbox-enabled gallery with smooth hover animations
- **Booking System**: Complete contact form with form validation
- **API Integration**: RESTful API endpoint for booking requests
- **Music Player**: Optional background music toggle with volume control
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint for booking requests
│   ├── booking/
│   │   └── page.tsx              # Booking page with form
│   ├── gallery/
│   │   └── page.tsx              # Image gallery with lightbox
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout with Navbar and Footer
│   └── page.tsx                  # Home page
├── components/
│   ├── Navbar.tsx                # Navigation bar with mobile menu
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── AboutSection.tsx          # About the Velociraptor
│   ├── EventsSection.tsx         # Event types offered
│   ├── GalleryPreview.tsx        # Gallery preview on home page
│   ├── VideoSection.tsx          # Video section
│   ├── VendorsSection.tsx        # Partner vendors
│   ├── MeetGreetSection.tsx      # Meet & greet locations
│   ├── BookingForm.tsx           # Reusable booking form component
│   ├── BookingCTA.tsx            # Booking call-to-action section
│   ├── MusicPlayer.tsx           # Background music toggle player
│   └── Footer.tsx                # Footer with contact info
└── lib/                          # Utility functions (for expansion)

public/                           # Static assets
```

## 🎨 Design Features

### Color Palette
- **Primary**: Black (#000000)
- **Accent**: Amber/Gold (#d97706)
- **Secondary**: Dark Green (#083344)
- **Backgrounds**: Gradients using slate, green, and black

### Animations
- Fade-in-up animations on page load
- Smooth hover effects on cards and buttons
- Glowing effects on interactive elements
- Floating animations for decorative elements

### Responsive Breakpoints
- Mobile: sm (640px)
- Tablet: md (768px)
- Desktop: lg (1024px)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. (Optional) Configure SendGrid for email notifications:
```bash
# Add your SendGrid API key to .env.local
SENDGRID_API_KEY=your_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Pages

### Home Page (`/`)
- Hero section with main CTA
- About section describing the animatronic
- Event types in card format
- Gallery preview
- Video section
- Vendor partners
- Meet & greet locations
- Booking CTA section

### Gallery Page (`/gallery`)
- Responsive image grid (3 columns on desktop)
- Hover animations and captions
- Lightbox modal for full-size viewing
- Navigation between images

### Booking Page (`/booking`)
- Contact form with validation
- Fields: Name, Email, Phone, Event Date, Location, Type, Message
- Success notification on submission
- FAQ section with common questions
- Info cards about response time and services

## 🔌 API Routes

### POST `/api/contact`
Receives booking form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "eventDate": "string (YYYY-MM-DD)",
  "eventLocation": "string",
  "eventType": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking request received! We will contact you shortly."
}
```

## 🎵 Music Player

The site includes a background music player (bottom-right corner):
- Toggle play/pause
- Volume control slider
- Minimal, non-intrusive design

To customize the music, update the audio source URL in `MusicPlayer.tsx`.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Font**: Geist (via Next.js)

## 📦 Dependencies

- `next@16.1.6` - React framework
- `react@19.2.3` - UI library
- `react-dom@19.2.3` - DOM renderer
- `tailwindcss@^4` - CSS framework
- `typescript@^5` - Type safety
- `lucide-react` - Icon library

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is optimized for deployment on any platform that supports Node.js and Next.js, including:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku
- Custom VPS/servers

## 📝 Customization Guide

### Change Colors
Edit the color values in `src/app/globals.css` and update Tailwind classes in components.

### Update Company Name
Search and replace "Velociraptor Events" with your company name throughout the codebase.

### Add Images
- Replace dinosaur emoji placeholders with actual images
- Add images to the `public/` folder
- Update image imports in components

### Configure Email
When ready to send emails:
1. Install SendGrid: `npm install @sendgrid/mail`
2. Uncomment the SendGrid code in `src/app/api/contact/route.ts`
3. Add your API key to `.env.local`
4. Import and use sgMail in the route handler

### Customize Event Types
Edit the `events` array in `EventsSection.tsx` to customize event categories.

## 🔐 Environment Variables

Required for email functionality:
- `SENDGRID_API_KEY` - SendGrid API key for sending emails

Optional configuration:
- `NEXT_PUBLIC_SITE_URL` - Site URL for meta tags
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address

## 📞 Support

For questions about Next.js, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

---

**Created for:** Premium Event Entertainment
**Theme:** Jurassic/Dinosaur Entertainment
**Built with:** Next.js 14, React, TypeScript, Tailwind CSS

