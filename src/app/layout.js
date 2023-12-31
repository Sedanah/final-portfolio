import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sedanah Mashhour'
}
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
