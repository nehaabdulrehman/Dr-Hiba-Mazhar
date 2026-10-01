import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Activity, 
  CalendarDays, 
  Flower2, 
  Baby, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Heart, 
  Calendar 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function WomensCareSection({ onOpenAppointment }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Parallax transforms for decorative background and lines
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const linesY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);

  // Icon resolver for conditions
  const getConditionIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#1F5C4F]" />;
      case 'CalendarDays':
        return <CalendarDays className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Flower2':
        return <Flower2 className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Baby':
        return <Baby className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#1F5C4F]" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-[#1F5C4F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#1F5C4F]" />;
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
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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

  const conditionVariants = {
    hidden: { opacity: 0, y: 15 },
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

  const { womensCareSection } = SITE_CONFIG;

  return (
    <section
      id="womens-care"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & SEAMLESS FADES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Mint Ambient Glow Blob */}
        <motion.div
          style={{ y: bgY }}
          className="absolute top-1/4 -left-30 w-[550px] h-[550px] rounded-full bg-radial from-[#E8F0EA]/70 via-[#8FAF9A]/15 to-transparent blur-3xl opacity-80 will-change-transform"
        />

        {/* Golden Warm Glow Blob */}
        <motion.div
          style={{ y: bgY }}
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] rounded-full bg-radial from-[#C9A96E]/12 via-[#E8F0EA]/30 to-transparent blur-3xl opacity-70 will-change-transform"
        />

        {/* Smooth Section Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8F6F1] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >

          {/* LEFT SIDE - Image & Decorative Green Accent Lines */}
          <motion.div variants={imageVariants} className="lg:col-span-6 relative flex justify-center">
            
            {/* Main Outer Decorative Framework Wrapper */}
            <div className="relative w-full max-w-[480px] lg:max-w-none">

              {/* Single Elegant Bottom-Left Corner L-Line with Linear Gradient & Parallax */}
              <motion.div
                style={{ y: linesY }}
                className="absolute -left-3 -bottom-3 sm:-left-4 sm:-bottom-4 w-[75%] h-[85%] pointer-events-none z-0 overflow-visible"
              >
                <svg
                  viewBox="0 0 250 300"
                  fill="none"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="womensCornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8FAF9A" stopOpacity="0.2" />
                      <stop offset="35%" stopColor="#8FAF9A" stopOpacity="0.75" />
                      <stop offset="65%" stopColor="#1F5C4F" stopOpacity="1" />
                      <stop offset="100%" stopColor="#C9A24B" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 2 0 L 2 272 Q 2 298 28 298 L 245 298"
                    fill="none"
                    stroke="url(#womensCornerGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={lineVariants}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </motion.div>

              {/* Decorative Accent: Small Green "x" Marks */}
              <motion.div style={{ y: linesY }} className="absolute -top-6 -left-2 text-[#8FAF9A] text-xs font-sans select-none z-0">
                ✕
              </motion.div>
              <motion.div style={{ y: linesY }} className="absolute -top-6 right-2 text-[#8FAF9A] text-xs font-sans select-none z-0">
                ✕
              </motion.div>
              <motion.div style={{ y: linesY }} className="absolute bottom-1/3 -left-6 text-[#8FAF9A] text-xs font-sans select-none z-0">
                ✕
              </motion.div>

              {/* Soft Green Glow Frame behind Image */}
              <div className="absolute inset-0 bg-[#E8F0EA]/80 rounded-3xl blur-xl -z-10 scale-95" />

              {/* Main Photo Image Container */}
              <motion.div style={{ y: imageY }} className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-[#1C2925]/[0.06] border border-white/90 bg-white z-10 group">
                <img
                  src={womensCareSection.imageSrc}
                  alt={womensCareSection.imageAlt}
                  className="w-full h-auto max-h-[460px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE - Content, Conditions & CTA Button */}
          <motion.div variants={containerVariants} className="lg:col-span-6 flex flex-col items-start">
            
            {/* Small Label */}
            <motion.span variants={textVariants} className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-2.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4F]" />
              {womensCareSection.label}
            </motion.span>

            {/* Heading with Italic "for Women" */}
            <motion.h2 variants={textVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-3">
              {womensCareSection.headingMain}
              <span className="font-serif italic font-normal text-[#1F5C4F]">
                {womensCareSection.headingItalic}
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p variants={textVariants} className="text-[0.95rem] text-[#66736D] leading-[1.7] max-w-xl mb-5">
              {womensCareSection.paragraph}
            </motion.p>

            {/* Thin Divider Line */}
            <motion.div variants={textVariants} className="w-full border-b border-[#8FAF9A]/25 mb-5" />

            {/* Conditions 2-Column List */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full mb-8">
              {/* Left Column Conditions */}
              <div className="flex flex-col gap-3.5">
                {womensCareSection.conditionsLeft.map((item, idx) => (
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
                {womensCareSection.conditionsRight.map((item, idx) => (
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
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#E8F0EA]/60 border border-[#1F5C4F] text-[#1F5C4F] text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#1F5C4F] group-hover:rotate-12 transition-transform duration-300" />
                <span>{womensCareSection.buttonText}</span>
              </button>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
