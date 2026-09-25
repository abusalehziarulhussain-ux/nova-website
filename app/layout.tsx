import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ari Vale | Designer & Developer',
  description: 'Portfolio website for a multidisciplinary designer and frontend developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
