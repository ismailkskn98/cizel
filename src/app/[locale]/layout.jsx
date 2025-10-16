import localFont from 'next/font/local'
import "../globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReactLenis } from "@/lib/lenis";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/sonner';

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

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
const getContact = async () => {
  try {
    const response = await fetch(`${base_url}/api/site/contact`, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }
    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const contactData = await getContact();
  const email = contactData.email;
  const phone = contactData.phone;
  const address = contactData.address;
  const socialMedia = contactData.socialMedia;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <ReactLenis root options={{ touchMultiplier: 0 }}>
        <body
          className={`${manropeFont.variable} ${strongFont.variable} w-full font-manrope antialiased`}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Toaster position="top-right" expand={true} richColors />
            <Header />
            {children}
            <Footer contactData={{ email, phone, address, socialMedia }} />
          </NextIntlClientProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
