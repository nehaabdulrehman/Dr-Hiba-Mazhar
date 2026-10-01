import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function FaqSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Open Question State (Question 1 open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  // Scroll Parallax transforms for atmospheric background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);

  // Animation variants for scroll-in reveal
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

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const { faqSection } = SITE_CONFIG;

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & SEAMLESS FADES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Soft Mint/Sage Glow Blob - Left */}
        <motion.div
          style={{ y: bgY1 }}
          animate={shouldReduceMotion ? {} : { x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-radial from-[#E8F0EA] via-[#8FAF9A]/18 to-transparent blur-3xl opacity-80 will-change-transform"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Sticky Label & Heading Container on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start z-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Small Label with Short Green Line */}
              <motion.span variants={textVariants} className="inline-flex items-center gap-2.5 text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-3">
                <span className="w-6 h-[2px] bg-[#1F5C4F]" />
                <span>{faqSection.label}</span>
              </motion.span>

              {/* Heading in Two Lines */}
              <motion.h2 variants={textVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                <span className="text-[#1C2925] block">{faqSection.headingLine1}</span>
                <span className="text-[#1F5C4F] block">{faqSection.headingLine2}</span>
              </motion.h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: FAQ Accordion List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            {/* Top Divider Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full border-t border-[#8FAF9A]/40 origin-left"
            />

            {/* Accordion Rows */}
            {faqSection.items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={item.id}
                  variants={rowVariants}
                  className="border-b border-[#8FAF9A]/35"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full py-6 px-0 flex items-center justify-between text-left group outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5C4F] focus-visible:ring-offset-4 cursor-pointer select-none [-webkit-tap-highlight-color:transparent]"
                  >
                    {/* Question Text (Inter Font, Regular/Medium weight, Always #111111 black, perfectly left-aligned) */}
                    <span className="font-sans text-[1.1rem] sm:text-[1.125rem] font-medium text-[#111111] leading-normal block pr-4">
                      {item.question}
                    </span>

                    {/* Circular Icon Button (Outlined (+) vs Dark Filled (X)) */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ml-4 ${
                        isOpen
                          ? 'bg-[#111111] border-transparent shadow-md'
                          : 'border border-[#1F5C4F] bg-transparent group-hover:bg-[#E8F0EA]/70 group-hover:border-[#1F5C4F]'
                      }`}
                    >
                      <Plus
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? 'rotate-45 text-white' : 'text-[#1F5C4F]'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable Answer Container */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -6 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[0.95rem] text-[#3F6B57] leading-[1.7] mt-3.5 pb-6 sm:pb-7 px-0 max-w-[90%] sm:max-w-[88%] pr-4 sm:pr-8">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Medical Emergency Note */}
            <motion.p variants={textVariants} className="text-xs text-[#8A9590] mt-8 tracking-wide font-sans">
              {faqSection.emergencyNote}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
