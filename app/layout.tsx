import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReactQueryProvider from '@/lib/provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PageMetaData } from '@/seo-config';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const meta = PageMetaData.Home;
export const metadata: Metadata = {
  ...meta,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-dvh relative`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="container pt-8 pb-32">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
