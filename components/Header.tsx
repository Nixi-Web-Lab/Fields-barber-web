"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Hook to measure container dimensions
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const measure = () => {
        setDimensions({
          width: ref.current?.offsetWidth || 0,
          height: ref.current?.offsetHeight || 0,
        });
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
  }, [ref]);

  return dimensions;
};

// Animated Menu Toggle Button
const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
  <motion.button
    onClick={toggle}
    className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
    aria-label="Toggle menu"
    initial="closed"
    animate={isOpen ? "open" : "closed"}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);

const Path = (props: React.ComponentProps<typeof motion.path>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

// Animation variants
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring" as const,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.2,
      type: "spring" as const,
      stiffness: 500,
      damping: 45,
    },
  },
};

const navVariants = {
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Header: React.FC = () => {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled  ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 relative z-50">
              <Image
                src="/images/logo-white.svg"
                alt="Fields Barbers"
                width={180}
                height={120}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gold transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}

              <LanguageSwitcher />

              <Button
                variant="primary"
                size="sm"
                href={`https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba`}
              >
                {t("book")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Toggle - Fixed top right */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <div className="bg-black rounded-full p-2 shadow-xl border-2 border-gold/50">
          <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
      </div>

      {/* Mobile Menu with Circular Reveal */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="lg:hidden fixed inset-0 w-full z-40"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Full background overlay - fades in/out */}
        <motion.div
          className="absolute inset-0 bg-dark/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />

        {/* Decorative circular reveal effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark/90"
          variants={sidebarVariants}
        />

        {/* Navigation items */}
        <motion.ul
          variants={navVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute top-24 left-0 right-0 px-8 space-y-6"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-gold transition-colors text-2xl font-medium"
              >
                {link.label}
              </a>
            </motion.li>
          ))}

          {/* Language Switcher */}
          <motion.li variants={itemVariants} className="pt-4 border-t border-gold/20">
            <LanguageSwitcher />
          </motion.li>

          {/* Book Button */}
          <motion.li variants={itemVariants} className="pt-4">
            <Button
              variant="primary"
              className="w-full"
              href="https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba"
            >
              {t("book")}
            </Button>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};
