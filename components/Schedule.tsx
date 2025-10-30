"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Clock, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SCHEDULE, BUSINESS_INFO } from "@/lib/constants";

export const Schedule: React.FC = () => {
  const t = useTranslations("contact");
  const tSchedule = useTranslations("schedule");
  const locale = useLocale();

  const scheduleData = SCHEDULE[locale as "es" | "en"];

  return (
    <section id="contact" className="section-padding bg-dark-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 gradient-text">
            {t("title")}
          </h2>
          <p className="text-gray-custom text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark rounded-lg p-4 sm:p-6 lg:p-8 border border-gold/20"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gold" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-white">
                {tSchedule("openingHours")}
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {scheduleData.map((day, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center gap-3 sm:gap-4 p-2.5 sm:p-3 lg:p-4 rounded ${
                    day.open ? "bg-dark-secondary" : "bg-dark-secondary/50"
                  }`}
                >
                  <span
                    className={`font-medium text-xs sm:text-sm lg:text-base ${
                      day.open ? "text-white" : "text-gray-custom"
                    }`}
                  >
                    {day.day}
                  </span>
                  <span
                    className={`text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                      day.open ? "text-gold" : "text-gray-custom"
                    }`}
                  >
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6"
          >
            {/* Address */}
            <div className="bg-dark rounded-lg p-4 sm:p-5 lg:p-6 border border-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1.5 sm:mb-2">
                    {t("address")}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-custom leading-relaxed">
                    {BUSINESS_INFO.address.street},{" "}
                    {BUSINESS_INFO.address.postalCode},{" "}
                    {BUSINESS_INFO.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${BUSINESS_INFO.address.street},${BUSINESS_INFO.address.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm lg:text-base text-gold hover:text-gold-light mt-1.5 sm:mt-2 inline-block"
                  >
                    {t("getDirections")} →
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-dark rounded-lg p-4 sm:p-5 lg:p-6 border border-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <FaInstagram className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1.5 sm:mb-2">
                    {t("followUs")}
                  </h4>
                  <a
                    href={`https://instagram.com/${BUSINESS_INFO.contact.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm lg:text-base text-gray-custom hover:text-gold transition-colors break-words"
                  >
                    {BUSINESS_INFO.contact.instagram}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
