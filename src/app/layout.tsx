import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { inter, bebasNeue } from '@/lib/fonts'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://bucktownbullsbaseball.org'),
  title: {
    default: 'Bucktown Bulls Baseball',
    template: '%s | Bucktown Bulls Baseball',
  },
  description:
    'Bucktown Bulls Baseball is a youth baseball organization. This is a public information page; team rosters, schedules, and parent resources are shared with families through separate channels.',
  keywords: [
    'Bucktown Bulls',
    'Bucktown Bulls Baseball',
    'youth baseball',
    'travel baseball',
    'baseball organization',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://bucktownbullsbaseball.org/',
    siteName: 'Bucktown Bulls Baseball',
    title: 'Bucktown Bulls Baseball',
    description:
      'Bucktown Bulls Baseball — a youth baseball organization. Contact us for roster, schedule, and parent resources.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bucktown Bulls Baseball',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucktown Bulls Baseball',
    description: 'A youth baseball organization. Contact us for team information.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={['antialiased', 'bg-cream', 'text-ink', inter.variable, bebasNeue.variable].join(
          ' '
        )}
        suppressHydrationWarning={true}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:text-ink focus:px-3 focus:py-2 focus:rounded focus:shadow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
