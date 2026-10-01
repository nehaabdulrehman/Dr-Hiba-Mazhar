import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GraduationCap, Stethoscope, Sparkles, Heart, Leaf } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Parallax transforms for background layers
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);
  const cardOffsetY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [15, -15]);

  // Icon mapping
  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#1F5C4F]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-[#1F5C4F]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#1F5C4F]" />;
    }
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const { aboutSection } = SITE_CONFIG;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & CURVED FEATHER RAY LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Blurred Ambient Blob 1 - Soft Mint Haze */}
        <motion.div
          style={{ y: bgY1 }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-radial from-[#E8F0EA]/70 via-[#8FAF9A]/15 to-transparent blur-3xl opacity-80 will-change-transform"
        />

        {/* Blurred Ambient Blob 2 - Light Golden Warm Glow */}
        <motion.div
          style={{ y: bgY2 }}
          className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-radial from-[#C9A96E]/12 via-[#E8F0EA]/30 to-transparent blur-3xl opacity-70 will-change-transform"
        />

        {/* Delicate Curved Feather/Leaf Light Streaks SVG */}
        <svg
          className="absolute inset-0 w-full h-full text-[#8FAF9A]/15 pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 450C250 150 650 650 1100 200C1300 50 1500 300 1600 450"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M-50 600C350 300 750 800 1250 350"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M100 200C450 500 850 100 1350 500"
            stroke="#C9A96E"
            strokeOpacity="0.1"
            strokeWidth="1.2"
          />
        </svg>

        {/* Smooth Section Fades (Top & Bottom) */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8F6F1] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >

          {/* LEFT COLUMN - Compact Text Block */}
          <motion.div variants={textVariants} className="lg:col-span-5 flex flex-col items-start">
            
            {/* Label */}
            <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-2.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4F]" />
              {aboutSection.label}
            </span>

            {/* Heading (Reduced ~25%) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-1">
              {aboutSection.heading}
            </h2>

            {/* Subtitle */}
            <h3 className="font-serif text-base sm:text-lg font-normal italic text-[#1F5C4F] mb-4">
              {aboutSection.subtitle}
            </h3>

            {/* Paragraph (Compact max-w-[480px]) */}
            <p className="text-[0.9rem] sm:text-[0.95rem] text-[#66736D] leading-[1.7] max-w-[480px] font-normal">
              {aboutSection.paragraph}
            </p>

          </motion.div>

          {/* RIGHT COLUMN - Compact 3 Stacked Cards (Max-width 520px) */}
          <motion.div
            style={{ y: cardOffsetY }}
            className="lg:col-span-7 flex flex-col gap-4 max-w-[520px] w-full mx-auto lg:ml-auto"
          >
            {aboutSection.cards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="group bg-white/90 backdrop-blur-md border border-white/90 rounded-2xl p-4 sm:p-5 shadow-lg shadow-[#1C2925]/[0.04] hover:shadow-xl hover:shadow-[#1F5C4F]/10 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                {/* 44px x 44px Icon Tile */}
                <div className="w-[44px] h-[44px] rounded-xl bg-[#E8F0EA] border border-[#8FAF9A]/30 flex items-center justify-center shrink-0 group-hover:bg-[#1F5C4F] group-hover:scale-105 transition-all duration-300 shadow-sm">
                  {React.cloneElement(getCardIcon(card.icon), {
                    className: "w-5 h-5 text-[#1F5C4F] group-hover:text-white transition-colors duration-300"
                  })}
                </div>

                {/* Card Content */}
                <div className="flex flex-col">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C2925] mb-1 group-hover:text-[#1F5C4F] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66736D] leading-[1.6]">
                    {card.bodyPrefix}
                    {card.bodyBold1 && (
                      <strong className="text-[#1C2925] font-semibold">{card.bodyBold1}</strong>
                    )}
                    {card.bodyMiddle}
                    {card.bodyBold2 && (
                      <strong className="text-[#1C2925] font-semibold">{card.bodyBold2}</strong>
                    )}
                    {card.bodySuffix}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
