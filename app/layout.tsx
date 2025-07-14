import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/lib/provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Poppins } from 'next/font/google';
import { PageMetaData } from '@/seo-config';


const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700'],
  style: 'normal',
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
        className={`${poppins.className} antialiased w-full min-h-dvh relative`}
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
