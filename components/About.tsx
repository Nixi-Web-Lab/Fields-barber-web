'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award, Globe, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const t = useTranslations('about');

  const features = [
    {
      icon: Globe,
      label: t('differentiator'),
    },
    {
      icon: Award,
      label: t('experience'),
    },
    {
      icon: Sparkles,
      label: t('passion'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 gradient-text">
              {t('title')}
            </h2>

            <h3 className="text-2xl text-gold mb-6">
              {t('subtitle')}
            </h3>

            <p className="text-gray-custom text-lg leading-relaxed mb-12">
              {t('bio')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-4 bg-dark/50 p-6 rounded-lg border border-gold/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="text-white text-center">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
