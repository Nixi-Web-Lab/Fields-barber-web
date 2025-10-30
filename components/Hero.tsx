'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* SVG Background with blur effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/barber_razor_white.svg"
          alt=""
          fill
          className="object-contain scale-150 opacity-35 blur-[1.2px] md:scale-95"
          aria-hidden="true"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl md:text-8xl mb-4 text-white font-serif">
            {t('title')}
          </h1>

          <h2 className="text-2xl md:text-4xl font-serif mb-6 text-gold">
            {t('subtitle')}
          </h2>

          <p className="text-lg md:text-xl text-gray-custom mb-8 max-w-2xl mx-auto">
            {t('tagline')}
          </p>

          <p className="text-base md:text-lg text-gray-custom/80 mb-12">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba">
              {t('cta')}
            </Button>
            <Button variant="outline" size="lg" href="#services">
              {t('ctaSecondary')}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-gold" />
      </motion.div>
    </section>
  );
};
