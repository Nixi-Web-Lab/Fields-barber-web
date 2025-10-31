'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const LANGUAGE_CONFIRMED_KEY = 'language_confirmed';

export const useLanguagePreference = () => {
  const [showModal, setShowModal] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Verificar si el usuario ya confirmó su preferencia de idioma
    const hasConfirmed = localStorage.getItem(LANGUAGE_CONFIRMED_KEY);

    // Solo mostrar el modal si no ha confirmado antes
    if (!hasConfirmed) {
      // Pequeño delay para mejor UX (evitar que sea demasiado intrusivo)
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const confirmLanguage = () => {
    // Guardar preferencia en localStorage
    localStorage.setItem(LANGUAGE_CONFIRMED_KEY, 'true');
    setShowModal(false);
  };

  const switchLanguage = () => {
    // Determinar el nuevo idioma (opuesto al actual)
    const newLocale = locale === 'es' ? 'en' : 'es';

    // Guardar preferencia en localStorage
    localStorage.setItem(LANGUAGE_CONFIRMED_KEY, 'true');

    // Cerrar el modal
    setShowModal(false);

    // Redirigir al nuevo idioma
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return {
    showModal,
    currentLanguage: locale,
    confirmLanguage,
    switchLanguage,
  };
};
