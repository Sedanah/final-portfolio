import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sedanah Mashhour',
  description:
    'Sedanah Mashhour is a CS + Business Student at Northeastern University',
  openGraph: {
    title: 'Sedanah Mashhour',
    siteName: 'Sedanah Mashhour',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
      </head>
      <body className={`bg-[#0a192f] w-screen h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
