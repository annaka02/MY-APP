# AgentFlow Landing Page — Build Plan

## Files to Create/Update
- [x] src/app/globals.css — dark theme, n8n orange palette, Tailwind v4 @theme
- [x] src/app/layout.tsx — metadata, Navbar + Footer wrappers
- [x] src/app/page.tsx — Hero, Features, Contact sections
- [x] src/app/pricing/page.tsx — 3-tier pricing page
- [x] src/components/Navbar.tsx — sticky glassmorphism, mobile drawer
- [x] src/components/Footer.tsx — grid footer
- [x] src/components/ScrollReveal.tsx — framer-motion whileInView wrapper
- [x] src/components/ContactForm.tsx — client form with localStorage draft
- [x] src/components/CTAButton.tsx — pulsing CTA with glow
- [x] src/components/PricingToggle.tsx — monthly/yearly toggle + 3 plan cards

## Stack
- Next.js 16.2.1 (App Router), React 19, TypeScript
- Tailwind CSS v4 (@import "tailwindcss", @theme blocks)
- Framer Motion v12 (motion, AnimatePresence)
- Lucide React v1.7

## Notes
- Dark mode by default (forced via CSS, not media query)
- n8n Orange: #FF6D5B
- No Shadcn UI — raw Tailwind + Framer Motion
