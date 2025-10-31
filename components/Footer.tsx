'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark-secondary border-t border-gold/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start w-full">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo-gold.svg"
              alt="Fields Barbers"
              width={200}
              height={134}
              className="h-20 md:h-32 w-auto mb-0"
            />
            <p className="text-gray-custom text-sm me-4 sm:me-0">{t("tagline")}</p>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-gold font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-custom hover:text-gold transition-colors"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-custom hover:text-gold transition-colors"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-custom hover:text-gold transition-colors"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-custom hover:text-gold transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">{t("social")}</h3>
            <div className="space-y-3">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.contact.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-custom hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                {BUSINESS_INFO.contact.instagram}
              </a>
            </div>

            {/* Language Switcher */}
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
