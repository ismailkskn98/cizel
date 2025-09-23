import localFont from 'next/font/local'
import "../globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReactLenis } from "@/lib/lenis";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const manropeFont = localFont({
  src: [
    {
      path: "../../fonts/Manrope-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../fonts/Manrope-SemiBold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../fonts/Manrope-ExtraBold.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  variable: "--font-manrope"
})

const strongFont = localFont({
  src: "../../fonts/Strong.woff",
  variable: "--font-strong",
})

export const metadata = {
  title: "Cizel",
  description: "Cizel",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="tr">
      <ReactLenis root>
        <body
          className={`${manropeFont.variable} ${strongFont.variable} w-full font-manrope antialiased`}
        >
          <Header />
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
