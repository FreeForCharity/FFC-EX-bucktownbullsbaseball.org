import { Inter, Bebas_Neue } from 'next/font/google'

// Body / UI sans — clean, neutral, accessible at small sizes.
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

// Display face — athletic, signage-style, used for org name and section labels.
// Bebas Neue is a strong fit for sports/baseball without being kitschy.
export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: '400',
})
