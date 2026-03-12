# Theme Update Guide: Dark to Warm Earthy Prehistoric

## Completed Theme Updates ✓

These components have been updated to the warm earthy theme:
- ✓ Navbar.tsx (brown header with orange buttons)
- ✓ Hero.tsx (tan/beige background with dinosaur visuals)
- ✓ Footer.tsx (brown footer)
- ✓ AboutSection.tsx (cream/beige backgrounds)
- ✓ EventsSection.tsx (tan cards with brown borders)
- ✓ GalleryPreview.tsx (warm gradient backgrounds)
- ✓ globals.css (updated color palette)

## Remaining Components to Update

### 1. VideoSection.tsx
**Location**: `src/components/VideoSection.tsx`

Replace the section styling:
- `bg-black` → `bg-amber-900`
- `text-white` → `text-amber-50`
- `aspect-video` → `h-96`
- All `bg-slate-900/50` → `bg-amber-100`
- All `border-amber-900/30` → `border-4 border-amber-950`
- All `text-gray-400` → `text-amber-950`
- `text-amber-400` → `text-orange-700`
- Play button: `bg-gradient-to-r from-amber-500 to-amber-600` → `bg-orange-600 hover:bg-orange-700`

### 2. VendorsSection.tsx
**Location**: `src/components/VendorsSection.tsx`

Replace the section styling:
- `bg-gradient-to-b from-black to-green-950/20` → `section-bg`
- `text-white` → `text-amber-950`
- `text-gray-400` → `text-amber-900`
- All cards: `bg-slate-900/50 border border-amber-900/30` → `bg-amber-100 border-4 border-amber-950`
- `text-amber-400` → `text-orange-700`
- CTA section: `bg-gradient-to-r from-amber-900/20 to-green-900/20 border border-amber-700/50` → `bg-amber-100 border-4 border-amber-950`
- `text-white` in CTA → `text-amber-950`
- `text-gray-400` in CTA → `text-amber-900`
- Button: `bg-gradient-to-r from-amber-500 to-amber-600 text-black` → `btn-primary`

### 3. MeetGreetSection.tsx
**Location**: `src/components/MeetGreetSection.tsx`

Replace all styling:
- `bg-black` → `section-bg`
- `text-white` → `text-amber-950`
- `text-gray-400` → `text-amber-900`
- All cards: `bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-900/30` → `bg-amber-100 border-4 border-amber-950`
- `text-white` → `text-amber-950`
- Event title: add `text-orange-700`
- Calendar/location icons: `text-amber-500` → `text-orange-600`
- `text-gray-300` → `text-amber-900`
- Buttons: `bg-amber-900/30 border border-amber-600/50 text-amber-400` → `bg-orange-50 border-2 border-orange-600 text-orange-700`
- Subscribe section: `bg-gradient-to-r from-amber-900/30 to-green-900/30 border border-amber-700/50` → `bg-amber-100 border-4 border-amber-950`
- Input field: `bg-black/50 border border-amber-700/50` → `bg-white border-2 border-amber-950`
- Input buttons: Use `btn-primary`

### 4. BookingCTA.tsx
**Location**: `src/components/BookingCTA.tsx`

Replace styling:
- `bg-black` → `section-bg`
- `text-white` → `text-amber-950`
- All text colors: `text-gray-300` → `text-amber-900`
- Title span: `bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent` → `text-orange-700`
- Buttons: Use `btn-primary` and `btn-secondary` 
- Background effects opacity: adjust as needed for visibility

### 5. BookingForm.tsx
**Location**: `src/components/BookingForm.tsx`

Replace form styling:
- All labels: ensure `text-amber-950` or `text-brown-dark`
- Input fields: 
  - `bg-slate-900/50 border border-amber-900/30` → `bg-white border-2 border-amber-900`
  - `text-white` → `text-amber-950`
  - `placeholder-gray-500` → `placeholder-dark`
  - `focus:border-amber-500` → `focus:border-orange-600`
- Success message: `bg-green-900/20 border border-green-600` → `bg-green-50 border-2 border-green-600`
- Submit button: Use `btn-primary`
- Helper text: `text-gray-500` → `text-amber-900`

## Layout Updates Needed

### Gallery Page (`src/app/gallery/page.tsx`)
Replace styling:
- Hero section: Use same styling as Home hero
- `bg-gradient-to-b from-slate-900 via-green-950 to-black` → `bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50`
- All text colors update from white → amber-950
- Grid containers: `from-slate-800 via-green-900/50 to-black` → `from-amber-300 to-amber-200`
- Lightbox modal: Update background colors to warm tones

### Booking Page (`src/app/booking/page.tsx`)
Replace styling:
- Header section: use same Hero gradient
- Form container: `bg-slate-900/50 border border-amber-900/30` → `bg-amber-100 border-4 border-amber-950`
- Info cards: `bg-slate-900/50 border border-amber-900/30` → `bg-amber-100 border-4 border-amber-950`
- Text colors: white → amber-950, gray-400 → amber-900
- FAQ section: same color scheme as info cards

## Utility Classes (Already in globals.css)

```css
.btn-primary {
  @apply bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition duration-300;
}

.btn-secondary {
  @apply bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition duration-300;
}

.section-bg {
  background-color: #e8dcc8;
  background-image: linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

## Colors Reference

- **Primary Background**: `#d4c4b0` (tan/beige)
- **Secondary Background**: `#e8dcc8` (light tan)
- **Dark Background**: `#5a4a3a` (dark brown)
- **Text Dark**: `#3d3d3d`
- **Accent Orange**: `#d97534`
- **Accent Green**: `#557e4c`
- **Accent Brown**: `#6b5344`

Tailwind Classes:
- Backgrounds: `amber-100`, `amber-200`, `amber-50`, `amber-900`
- Text: `amber-950`, `amber-900`, `amber-800`, `orange-700`, `orange-600`
- Borders: `border-amber-900`, `border-4`, `border-2`
- Buttons: `orange-600`, `green-700`

## Quick Find & Replace Summary

| Old | New |
|-----|-----|
| `bg-black` | `section-bg` or `bg-amber-100`/`bg-amber-900` |
| `text-white` | `text-amber-950` or `text-amber-50` |
| `text-gray-400` | `text-amber-900` or `text-amber-800` |
| `text-gray-300` | `text-amber-900` |
| `text-gray-500` | `text-amber-800` |
| `bg-slate-900/50` | `bg-amber-100` |
| `border-amber-900/30` | `border-4 border-amber-950` |
| `text-amber-400` | `text-orange-700` |
| `from-amber-500` | `orange-600` |
| `from-amber-600` | `orange-700` |

---

**Note**: After making these updates, run `npm run build` to verify no compilation errors, then `npm run dev` to test the website locally.
