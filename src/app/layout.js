import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sedanah Mashhour',
  description:
    'Sedanah Mashhour is a CS + Business Student at Northeastern University',
  twitter: {
    card: 'summary_large_image',
    creator: '@alexjpate',
    images: ['/og.png'],
    title: 'Sedanah Mashhour',
  },
  openGraph: {
    title: 'Sedanah Mashhour',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sedanah Mashhour',
      },
    ],
    siteName: 'Sedanah Mashhour',
  },
  metadataBase: new URL('https://alexjpate.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        {/* Add other meta tags as needed */}
      </head>
      <body className={`bg-[#070b1b] w-screen h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
