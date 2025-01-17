import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'F1 Card Packs NFT',
  description: 'Collectible F1 Card Packs NFT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
