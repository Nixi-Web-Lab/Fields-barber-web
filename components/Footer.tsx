'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark-secondary border-t border-gold/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo-gold.svg"
              alt="Fields Barbers"
              width={200}
              height={134}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-custom text-sm">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-custom hover:text-gold transition-colors">
                  Inicio / Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-custom hover:text-gold transition-colors">
                  Servicios / Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-custom hover:text-gold transition-colors">
                  Nosotros / About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-custom hover:text-gold transition-colors">
                  Contacto / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">{t('social')}</h3>
            <div className="space-y-3">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-custom hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                {BUSINESS_INFO.contact.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-custom text-sm">
          <p>&copy; {new Date().getFullYear()} Fields Barbers. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
};
