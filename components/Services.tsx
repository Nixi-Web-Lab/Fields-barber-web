'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Scissors, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { SERVICES } from '@/lib/constants';

export const Services: React.FC = () => {
  const t = useTranslations('services');
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 gradient-text">
            {t('title')}
          </h2>
          <p className="text-gray-custom text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const name = isEnglish ? service.nameEN : service.nameES;
            const description = isEnglish ? service.descriptionEN : service.descriptionES;

            return (
              <motion.div
                key={service.id}
                variants={item}
                className="bg-dark-secondary rounded-lg p-8 border border-gold/20 hover:border-gold/60 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Scissors className="w-10 h-10 text-gold" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-center mb-4 text-white">
                  {name}
                </h3>

                <p className="text-gray-custom text-center mb-6">
                  {description}
                </p>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration} {t('duration')}</span>
                  </div>
                  <div className="text-2xl font-bold text-gold">
                    {service.price.toFixed(2)}{t('price')}
                  </div>
                </div>

                <Button variant="outline" className="w-full" href="https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba">
                  {t('bookNow')}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
