import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Baby, 
  ShieldCheck, 
  Utensils, 
  Sparkles, 
  Wind, 
  Thermometer, 
  MoonStar, 
  Heart, 
  Calendar 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ChildrensCareSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax scroll transforms for decorative background and lines
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-35, 35]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-15, 15]);
  const linesY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [15, -15]);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);

  // Icon resolver for conditions
  const getConditionIcon = (iconName) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-4 h-4 text-[#1F5C4F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Thermometer':
        return <Thermometer className="w-4 h-4 text-[#1F5C4F]" />;
      case 'MoonStar':
        return <MoonStar className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Heart':
      default:
        return <Heart className="w-4 h-4 text-[#1F5C4F]" />;
    }
  };

  // Staggered Animation Variants for Scroll Reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const conditionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut', delay: 0.2 },
    },
  };

  const { childrensCareSection } = SITE_CONFIG;

  return (
    <section
      id="childrens-care"
      ref={sectionRef}
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & SEAMLESS FADES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Blob 1: Soft Mint/Sage Glow behind Left Text Area */}
        <motion.div
          style={{ y: bgY1 }}
          animate={shouldReduceMotion ? {} : { x: [0, 25, -15, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute -top-12 -left-20 w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] rounded-full bg-radial from-[#E8F0EA] via-[#8FAF9A]/20 to-transparent blur-3xl opacity-85 will-change-transform pointer-events-none"
        />

        {/* Blob 2: Soft Warm/Mint Glow near Center-Bottom */}
        <motion.div
          style={{ y: bgY2 }}
          animate={shouldReduceMotion ? {} : { x: [0, -20, 25, 0], y: [0, 20, -18, 0] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 2 }}
          className="absolute -bottom-16 left-1/4 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-radial from-[#E8F0EA] via-[#C9A96E]/12 to-transparent blur-3xl opacity-75 will-change-transform pointer-events-none"
        />

        {/* Blob 3: Light Subtle Mint Glow behind Photo */}
        <motion.div
          style={{ y: bgY3 }}
          animate={shouldReduceMotion ? {} : { x: [0, 15, -20, 0], y: [0, -18, 12, 0] }}
          transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 4 }}
          className="absolute top-10 -right-16 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-radial from-[#E8F0EA]/90 via-[#8FAF9A]/14 to-transparent blur-3xl opacity-70 will-change-transform pointer-events-none"
        />

        {/* Faint Curved Feather Light Streaks (Sage Green, Low Opacity) */}
        <motion.div
          style={{ y: bgY2 }}
          animate={shouldReduceMotion ? {} : { x: [0, 10, -10, 0], y: [0, -12, 8, 0] }}
          transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <svg
            className="w-full h-full text-[#8FAF9A] pointer-events-none opacity-80"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M -50 180 C 400 380, 700 120, 1150 480"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.18"
            />
            <path
              d="M 150 -50 C 350 450, 850 300, 1450 650"
              stroke="currentColor"
              strokeWidth="1.4"
              opacity="0.14"
            />
            <path
              d="M 50 780 C 500 480, 900 820, 1500 380"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 8"
              opacity="0.12"
            />
            <path
              d="M -100 420 Q 600 160, 1300 580"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.15"
            />
          </svg>
        </motion.div>

        {/* Seamless Section Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >
          {/* LEFT SIDE CONTENT - Stacks after image on mobile */}
          <motion.div variants={containerVariants} className="order-1 lg:order-1 lg:col-span-7 flex flex-col items-start">
            
            {/* Small Label */}
            <motion.span variants={textVariants} className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-2.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4F]" />
              {childrensCareSection.label}
            </motion.span>

            {/* Heading on Two Lines with Italic "for Children" */}
            <motion.h2 variants={textVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-3">
              {childrensCareSection.headingMain}
              <span className="block font-serif italic font-normal text-[#1F5C4F]">
                {childrensCareSection.headingItalic}
              </span>
            </motion.h2>

            {/* Body Paragraph */}
            <motion.p variants={textVariants} className="text-[0.95rem] text-[#66736D] leading-[1.7] max-w-xl mb-5">
              {childrensCareSection.paragraph}
            </motion.p>

            {/* Thin Greenish Divider Line */}
            <motion.div variants={textVariants} className="w-full border-b border-[#8FAF9A]/25 mb-5" />

            {/* Conditions 2-Column List (Single column on smallest mobile) */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full mb-8">
              {/* Left Column Conditions */}
              <div className="flex flex-col gap-3.5">
                {childrensCareSection.conditionsLeft.map((item, idx) => (
                  <motion.div key={idx} variants={conditionVariants} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#E8F0EA] border border-[#8FAF9A]/30 flex items-center justify-center shrink-0 shadow-xs">
                      {getConditionIcon(item.icon)}
                    </div>
                    <span className="text-[0.95rem] font-medium text-[#1C2925]">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Right Column Conditions */}
              <div className="flex flex-col gap-3.5">
                {childrensCareSection.conditionsRight.map((item, idx) => (
                  <motion.div key={idx} variants={conditionVariants} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#E8F0EA] border border-[#8FAF9A]/30 flex items-center justify-center shrink-0 shadow-xs">
                      {getConditionIcon(item.icon)}
                    </div>
                    <span className="text-[0.95rem] font-medium text-[#1C2925]">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outline Pill CTA Button ("Book Appointment") */}
            <motion.div variants={textVariants}>
              <a
                href="#footer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#E8F0EA]/60 border border-[#1F5C4F] text-[#1F5C4F] text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#1F5C4F] group-hover:rotate-12 transition-transform duration-300" />
                <span>{childrensCareSection.buttonText}</span>
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE IMAGE - Stacks first on mobile */}
          <motion.div variants={imageVariants} className="order-2 lg:order-2 lg:col-span-5 relative flex justify-center">
            
            {/* Main Outer Decorative Framework Wrapper */}
            <div className="relative w-full max-w-[440px] lg:max-w-none">

              {/* Single Elegant Top-Right Corner L-Line with Linear Gradient & Parallax */}
              <motion.div
                style={{ y: linesY }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-[65%] h-[80%] pointer-events-none z-0 overflow-visible"
              >
                <svg
                  viewBox="0 0 200 300"
                  fill="none"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="childrenCornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8FAF9A" stopOpacity="0.2" />
                      <stop offset="35%" stopColor="#8FAF9A" stopOpacity="0.75" />
                      <stop offset="65%" stopColor="#1F5C4F" stopOpacity="1" />
                      <stop offset="100%" stopColor="#C9A24B" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 2 L 172 2 Q 198 2 198 28 L 198 290"
                    fill="none"
                    stroke="url(#childrenCornerGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={lineVariants}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </motion.div>

              {/* Faint Pale-Green Glow behind Image */}
              <div className="absolute inset-0 bg-[#E8F0EA]/80 rounded-3xl blur-xl -z-10 scale-95" />

              {/* Main Photo Image Container */}
              <motion.div style={{ y: imageY }} className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-[#1C2925]/[0.06] border border-white/90 bg-white z-10 group">
                <img
                  src={childrensCareSection.imageSrc}
                  alt={childrensCareSection.imageAlt}
                  className="w-full h-auto max-h-[460px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
