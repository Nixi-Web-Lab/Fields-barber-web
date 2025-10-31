import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import { getMetadata } from '@/lib/metadata';
import { getLocalBusinessSchema } from '@/lib/structured-data';
import { LanguageModalProvider } from '@/components/LanguageModalProvider';
import type { Metadata } from 'next';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(locale as 'es' | 'en');
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Verificar que el locale sea válido
  if (!['es', 'en'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <LanguageModalProvider />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}
