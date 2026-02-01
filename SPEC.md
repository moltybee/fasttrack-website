# Fast Track Clubhouse - Website Specification

## Overview
Rebuild the Fast Track Clubhouse landing page (https://new.thefasttrackgirl.com/clubhouse) using Next.js + shadcn/ui.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **UI:** shadcn/ui + Tailwind CSS
- **Fonts:** Poppins (headings), Manrope (body)
- **Hosting:** Vercel (later)
- **Checkout:** External redirect to https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse

## Design System

### Colors
```css
/* Primary */
--primary-pink: #FF4579;  /* rgb(255, 69, 121) */
--primary-pink-hover: #E63D6D;

/* Text */
--text-dark: #212A40;      /* rgb(33, 42, 64) */
--text-muted: #485E79;     /* rgb(72, 94, 121) */
--text-light: #828E9D;     /* rgb(130, 142, 157) */

/* Backgrounds */
--bg-white: #FFFFFF;
--bg-light-pink: #FFEFF2;  /* rgb(255, 239, 242) */
--bg-light-green: #E6FFD6; /* rgb(230, 255, 214) */
--bg-light-yellow: #FFFAD4;/* rgb(255, 250, 212) */
--bg-light-purple: #FFEDFB;/* rgb(255, 237, 251) */
--bg-light-orange: #FFF9F3;/* rgb(255, 249, 243) */

/* FAQ/Accent */
--faq-text: #FF8E8E;       /* rgb(255, 142, 142) */
```

### Typography
```css
/* Headings - Poppins */
h1: 58px / font-weight-500 / letter-spacing: -2px
h2: 42-46px / font-weight-500 / letter-spacing: -2px
h3: 28-32px / font-weight-500 / letter-spacing: -2px

/* Body - Manrope */
body: 16-18px / font-weight-400 / line-height: 1.65

/* Labels */
label: 15px / Poppins / font-weight-500 / letter-spacing: 1px / uppercase
```

### Border Radius
- Cards: 16-20px
- Buttons: 50px (pill)
- Sections with curves: Custom SVG backgrounds

## Page Sections

### 1. Hero Section
- Background: Light gradient with decorative shapes
- Main heading: "The Fast Track Clubhouse"
- Subheading: "Fast Track TikTok Shop Support Community"
- Description: "The Exclusive Community for Added Support, Live Q&A, Video Feedback, Connect with other Members, Giveaways, and more!"
- CTA Button: Pink pill button → checkout link

### 2. Quick Features Row
Two feature cards:
1. **Ask Your Questions**
   - Icon: Question mark/chat
   - "Post in the chat or jump onto a Live Q&A Session to ask your questions. We're here to help!"

2. **TESS Included**
   - Icons for each feature
   - 💬 Script Generator
   - 🔥 Hooks Maker
   - ⭐️ SEO Caption Optimizer
   - "AI Powered and specially trained for TikTok Shop Affiliates!"

### 3. "Comfort In Community" Section
- Heading: "See What's Working"
- Subheading: "Learn from others and build your success!"

### 4. Testimonials Carousel
5 testimonials with names:
- Sailorjayy: "I have learned so much in such a short amount of time!..."
- Vani: "I can't recommend Kierra's The Fast Track Girl course enough!..."
- Brooke: "I absolutely love being a part of this community!..."
- Staci: "It's phenomenal! I've taken other courses but this one far surpasses any of the others!"
- BSRanch: "I purchased the course & have learned so so much..."

### 5. Benefits Section
Label: "Clubhouse Community Benefits"
Heading: "Everything You're Getting"

#### 5a. Community & Support
- Icon: Discord/community icon
- Title: "Community & Support"
- Points:
  - Post your questions and build your support network inside our Exclusive (and active) Discord community
  - Collaborate and exchange ideas with others to stay motivated, inspired, and learn new strategies
  - Get real-time insights from peers who share the same goals and challenges

#### 5b. Live Audit Calls
- Title: "Live Audit Calls"
- Description: "With $3M+ in GMV, Kierra shares her expertise during Live Audit Calls! Submit your videos for review and get insights to working strategy!"

#### 5c. TESS AI Section
- Title: "Easy Mode with TESS"
- Subtitle: "Your TikTok Shop AI Script Generator"
- Features list:
  - 🛡️ Policy Checker
  - 🎉 Script Generator
  - 🔥 Hook Maker
  - ⭐️ SEO Caption Optimizer
- Description: "TESS is specifically trained to make your life easier crafting beautiful Shop Scripts, Hooks, & Captions, in a matter of seconds."

#### 5d. Coach Keri
- Title: "Coach Keri"
- Description: "A huge addition to the Fast Track line-up! Keri's here inside the chat, providing feedback, training, insights, and overall amazing added support! We're so lucky to have her!"
- Stats:
  - 🔥 An amazing 1M+ in GMV!
  - 💰 Over Six Figures in take home already in 2025!
  - 🙋‍♀️ Mom of four, crushing on TikTok Shop!

### 6. Fast Track Course Section
Label: "The TikTok Shop Accelerator" / "Clubhouse Community Benefits"
Heading: "Fast Track Course"

Content:
- Title: "How to succeed on TikTok Shop…"
- Subtitle: "(for more sales.. and bigger payouts)"
- Description: "I'll take you step by step on how to pick the right products, create amazing content, avoid getting shut down, collabing, getting more views, and so much more!"
- Bullet points:
  - ✓ Over 42 Videos, in 14+ Modules
  - ✓ Step by step: How to create content that sells
  - ✓ My entire SEO strategy for algo optimization
- Image: Course dashboard screenshot

### 7. Expert Sessions Section
Label: "Win With Strategy, Not Guesswork"
Heading: "Expert Insights, Unfiltered"

Horizontal scrolling cards with video thumbnails:
1. **Going LIVE for Sales** - @bri.rivard (bg: #FFF9F3)
2. **Strategy with Top 1% TikTok Shop Affiliate** - @influencedqueens (bg: #FFEFF2)
3. **Affiliate Manager Insider** - @codyjayartistry (bg: #E6FFD6)
4. **Fashion Content Mastery** - @susanstiktokthings (bg: #FFFAD4)
5. **Behind the Scenes of GMV Max** - @kc.bright5 (bg: #FFEDFB)
6. **Finding Your Niche + Fashion Category** - @sweetteaandsprinkles (bg: #E6FFD6)
7. **Skit Content That Sells** - @sheri_pie455 (bg: #FFEFF2)
8. **How to Land UGC Deals on Fiverr** - @freelancebigsis (bg: #FFFAD4)

### 8. CTA Section
Label: "FAST TRACK CLUBHOUSE"
Heading: "Get Access Today"
Price: "Only $47/month"
Button: "Yes! I'd Love To Join The Private Community!"
Sub-button text: "I Want Access Today For Only $47/month"
Link: https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse

### 9. FAQ Section
Heading: "Frequently Asked Questions"
Accordion items:
1. Do you have an Affiliate Program?
2. Is there a limit to how many scripts?
3. How often are the Q&A Calls?
4. How was TESS Trained?
5. Is TESS just a ChatGPT plugin?
6. Can I cancel at any time?
7. Can I ask questions to Kierra directly?

### 10. Footer
- Logo: The Fast Track Girl
- Copyright: "COPYRIGHT © 2024 | THE FAST TRACK GIRL"
- Links: Privacy Policy | Terms and Conditions | Disclaimer | Refund Policy | Cookie Policy
- External links to thefasttrackgirl.com/[page]
- Decorative gradient blobs (pink, teal)
- Side decorative images

## Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 810px - 1199px
- Mobile: < 809px

## Mobile Considerations
- Stack hero content vertically
- Single column for feature cards
- Testimonial carousel with swipe
- Expert sessions horizontal scroll
- Accordion FAQ fully functional
- Full-width CTA buttons
- Reduced font sizes (see design system)

## Animations (Optional - Phase 2)
- Fade up on scroll for sections
- Smooth accordion expand/collapse
- Testimonial carousel auto-play
- Button hover states

## Assets Location
- Images: /tmp/fasttrack-assets/images/
- Videos: /tmp/fasttrack-assets/videos/
- Copy these to: public/images/ and public/videos/

## Key Files to Create
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── QuickFeatures.tsx
│   ├── Testimonials.tsx
│   ├── Benefits.tsx
│   ├── CourseSection.tsx
│   ├── ExpertSessions.tsx
│   ├── CTASection.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
```

## External Dependencies
- @shadcn/ui components: Button, Accordion, Card
- embla-carousel-react (for testimonials/experts carousel)
- lucide-react (icons)
- next/font (Poppins, Manrope from Google Fonts)

## Checkout Integration
Simple external link - no payment processing needed:
```tsx
<a href="https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse" target="_blank">
  Join Now
</a>
```

## Success Criteria
1. Pixel-perfect match to original Framer design
2. Fully responsive (mobile-first)
3. Same mobile layout as original
4. All links functional
5. Smooth scrolling
6. Fast load times (optimize images)
