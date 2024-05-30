import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Lading Page - Itaú',
  icons: { icon: "../../favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
