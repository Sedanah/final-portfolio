import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sedanah Mashhour',
  description:
    'Alex Pate is a product engineer based in Milan, currently building the future of payments at MoonPay. Working somewhere on the boundary between design and code',
  twitter: {
    card: 'summary_large_image',
    creator: '@alexjpate',
    images: ['/og.png'],
    title: 'Alex Pate - Product Engineer',
  },
  openGraph: {
    title: 'Alex Pate - Product Engineer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Alex Pate - Product Engineer',
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
      <body className={`bg-[#020617] w-screen h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
