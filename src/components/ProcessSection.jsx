import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Parallax transforms for atmospheric background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);

  // Staggered Animation Variants for Scroll Reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.08,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
    },
  };

  const { processSection } = SITE_CONFIG;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & SEAMLESS FADES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Soft Mint/Sage Glow Blob - Left */}
        <motion.div
          style={{ y: bgY1 }}
          animate={shouldReduceMotion ? {} : { x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-radial from-[#E8F0EA] via-[#8FAF9A]/18 to-transparent blur-3xl opacity-80 will-change-transform"
        />

        {/* Soft Golden/Warm Glow Blob - Right */}
        <motion.div
          style={{ y: bgY2 }}
          animate={shouldReduceMotion ? {} : { x: [0, -20, 15, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 3 }}
          className="absolute bottom-10 -right-20 w-[480px] h-[480px] rounded-full bg-radial from-[#E8F0EA] via-[#C9A96E]/12 to-transparent blur-3xl opacity-75 will-change-transform"
        />

        {/* Smooth Section Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* SECTION HEADER - Centered */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Small Uppercase Label */}
          <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-2.5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4F]" />
            {processSection.label}
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-3">
            {processSection.heading}
          </h2>

          {/* Subtext */}
          <p className="text-[0.95rem] text-[#66736D] leading-[1.7] max-w-xl">
            {processSection.subtitle}
          </p>
        </motion.div>

        {/* 3 CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch max-w-6xl mx-auto w-full"
        >
          {processSection.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              tabIndex={0}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#8FAF9A]/35 shadow-md shadow-[#1F5C4F]/[0.04] hover:border-[#1F5C4F]/40 hover:shadow-[0_18px_40px_rgba(20,50,35,0.22),_0_4px_12px_rgba(20,50,35,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center relative overflow-hidden h-full w-full max-w-[360px] mx-auto lg:max-w-none group focus:outline-none focus-within:border-[#1F5C4F]/40 focus-within:shadow-[0_18px_40px_rgba(20,50,35,0.22)]"
            >
              {/* Faint Serif Number in Top-Right Corner (Turns dark #111 on hover / touch active) */}
              <span className="absolute top-4 right-5 font-serif text-2xl sm:text-[2rem] font-bold text-[#1C2925]/15 select-none pointer-events-none transition-all duration-300 ease-out group-hover:text-[#111111] group-hover:opacity-100 group-active:text-[#111111] group-active:opacity-100 group-focus-within:text-[#111111] group-focus-within:opacity-100">
                {card.number}
              </span>

              {/* Icon Container with Gentle Floating Animation */}
              <div className="relative w-full h-[100px] sm:h-[110px] flex items-center justify-center mb-4 mt-1">
                <motion.div
                  variants={iconVariants}
                  animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
                  transition={{ duration: 4.5 + idx * 0.7, ease: 'easeInOut', repeat: Infinity }}
                  className="h-full flex items-center justify-center"
                >
                  <img
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    className="h-full w-auto max-h-[100px] sm:max-h-[105px] object-contain mix-blend-multiply filter drop-shadow-xs"
                  />
                </motion.div>
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-lg sm:text-[1.15rem] font-bold text-[#1C2925] mb-2.5 text-center leading-snug">
                {card.title}
              </h3>

              {/* Card Description Body */}
              <p className="text-[0.875rem] text-[#66736D] leading-[1.6] text-center">
                {card.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
