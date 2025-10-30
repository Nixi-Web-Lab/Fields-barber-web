'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe, Gem, Icon, type LucideProps, type IconNode } from 'lucide-react';
import { barberPole } from '@lucide/lab';

type FeatureIcon =
  | { type: 'component'; icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> }
  | { type: 'node'; icon: IconNode };

export const About: React.FC = () => {
  const t = useTranslations('about');

  const features: Array<{ iconData: FeatureIcon; title: string; description: string }> = [
    {
      iconData: { type: 'component', icon: Globe },
      title: t('differentiator'),
      description: t('differentiatorDesc'),
    },
    {
      iconData: { type: 'node', icon: barberPole },
      title: t('experience'),
      description: t('experienceDesc'),
    },
    {
      iconData: { type: 'component', icon: Gem },
      title: t('passion'),
      description: t('passionDesc'),
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

            <p className="text-gray-custom text-lg text-justify leading-relaxed mb-12">
              {t('bio')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-4 bg-dark/50 p-6 rounded-lg border border-gold/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    {feature.iconData.type === 'node' ? (
                      <Icon iconNode={feature.iconData.icon} className="w-8 h-8 text-gold" aria-hidden="true" />
                    ) : (
                      <feature.iconData.icon className="w-8 h-8 text-gold" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-white text-center text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-custom text-center text-sm leading-relaxed">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
