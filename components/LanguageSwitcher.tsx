'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Reemplazar el locale en la ruta actual
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2 bg-dark-secondary rounded-lg p-1">
      <Globe className="w-4 h-4 text-gold ml-2" />

      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'es'
            ? 'bg-gold text-dark font-semibold'
            : 'text-gray-custom hover:text-white'
        }`}
      >
        ES
      </button>

      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-gold text-dark font-semibold'
            : 'text-gray-custom hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
