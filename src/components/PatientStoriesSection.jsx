import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function PatientStoriesSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { patientStoriesSection } = SITE_CONFIG;
  const totalReviews = patientStoriesSection.reviews.length;

  // Scroll Parallax transforms for background and floating photo/glass card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-12, 12]);
  const cardY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-22, 22]);

  // Carousel Navigation Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  // Get visible reviews for carousel (2 items on desktop, wrap around smoothly)
  const getVisibleReviews = () => {
    const rev1 = patientStoriesSection.reviews[currentIndex];
    const nextIdx = (currentIndex + 1) % totalReviews;
    const rev2 = patientStoriesSection.reviews[nextIdx];
    return [rev1, rev2];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const visibleReviews = getVisibleReviews();

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* ATMOSPHERIC BACKGROUND GLOW & SEAMLESS FADES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Soft Sage/Mint Glow Blob - Left */}
        <motion.div
          style={{ y: bgY1 }}
          animate={shouldReduceMotion ? {} : { x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute top-1/4 -left-24 w-[520px] h-[520px] rounded-full bg-radial from-[#E8F0EA] via-[#8FAF9A]/18 to-transparent blur-3xl opacity-80 will-change-transform"
        />

        {/* Soft Golden/Warm Glow Blob - Right */}
        <motion.div
          style={{ y: bgY2 }}
          animate={shouldReduceMotion ? {} : { x: [0, -20, 15, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 2 }}
          className="absolute bottom-10 -right-20 w-[480px] h-[480px] rounded-full bg-radial from-[#E8F0EA] via-[#C9A96E]/12 to-transparent blur-3xl opacity-75 will-change-transform"
        />

        {/* Smooth Section Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F6F1] via-[#F8F6F1]/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* LEFT SIDE CONTENT & REVIEWS CAROUSEL */}
          <motion.div variants={containerVariants} className="lg:col-span-7 flex flex-col items-start w-full">
            
            {/* Small Label */}
            <motion.span variants={textVariants} className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#1F5C4F] mb-2 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4F]" />
              {patientStoriesSection.label}
            </motion.span>

            {/* Heading */}
            <motion.h2 variants={textVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-3">
              {patientStoriesSection.heading}
            </motion.h2>

            {/* Subtext Row with Navigation Arrow Buttons */}
            <motion.div variants={textVariants} className="w-full flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <p className="text-[0.95rem] text-[#66736D] leading-[1.6]">
                {patientStoriesSection.subtitle}
              </p>

              {/* Circular Navigation Arrow Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Review"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#E8F0EA] border border-[#8FAF9A]/40 flex items-center justify-center text-[#1F5C4F] shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1F5C4F]" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Review"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#E8F0EA] border border-[#8FAF9A]/40 flex items-center justify-center text-[#1F5C4F] shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-[#1F5C4F]" />
                </button>
              </div>
            </motion.div>

            {/* 2-Card Review Carousel Container */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${review.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#8FAF9A]/35 shadow-lg shadow-[#1F5C4F]/[0.04] flex flex-col justify-between h-full hover:border-[#1F5C4F]/40 hover:shadow-xl transition-all duration-300 ${
                    idx === 1 ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  {/* Top Star Rating Row */}
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1F5C4F] text-[#1F5C4F]" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-[0.9rem] text-[#4A5752] leading-[1.65] mb-6 line-clamp-6">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Reviewer Details Footer */}
                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#8FAF9A]/15">
                    {/* Forest Green Initial Avatar Circle */}
                    <div className="w-10 h-10 rounded-full bg-[#1F5C4F] text-white font-semibold text-base flex items-center justify-center shrink-0 shadow-xs">
                      {review.initial}
                    </div>

                    <div className="flex flex-col">
                      <span className="font-serif text-[0.95rem] font-bold text-[#1C2925]">
                        {review.name}
                      </span>

                      {/* Google Review Badge with Small Google 'G' Icon */}
                      <div className="flex items-center gap-1.5 text-xs text-[#66736D] mt-0.5">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span>Google Review</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT SIDE - Doctor Portrait & Overlaid Frosted Glass Rating Card */}
          <motion.div variants={textVariants} className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              
              {/* Doctor Photo Container with Subtle Parallax */}
              <motion.div style={{ y: imageY }} className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#1C2925]/[0.08] border border-white/90 bg-white z-10 group">
                <img
                  src={patientStoriesSection.imageSrc}
                  alt={patientStoriesSection.imageAlt}
                  className="w-full h-auto max-h-[510px] object-cover rounded-3xl group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Frosted Glass Rating Card Overlaid on Lower Photo Area */}
              <motion.div
                style={{ y: cardY }}
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/75 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-xl shadow-[#1C2925]/[0.08] z-20 flex flex-col items-center text-center"
              >
                {/* Rating Number */}
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F5C4F] leading-none mb-1.5">
                  {patientStoriesSection.rating}
                </span>

                {/* 5-Star Row */}
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1F5C4F] text-[#1F5C4F]" />
                  ))}
                </div>

                {/* Uppercase Label */}
                <span className="text-[0.68rem] font-bold tracking-widest text-[#1F5C4F]/80 uppercase mb-3">
                  GOOGLE RATING
                </span>

                {/* 4 Overlapping Initials Circles (S, M, F, A) */}
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1F5C4F] text-white font-semibold text-xs flex items-center justify-center border-2 border-white shadow-xs">S</div>
                  <div className="w-8 h-8 rounded-full bg-[#2E6F60] text-white font-semibold text-xs flex items-center justify-center border-2 border-white shadow-xs">M</div>
                  <div className="w-8 h-8 rounded-full bg-[#8FAF9A] text-white font-semibold text-xs flex items-center justify-center border-2 border-white shadow-xs">F</div>
                  <div className="w-8 h-8 rounded-full bg-[#C9A96E] text-white font-semibold text-xs flex items-center justify-center border-2 border-white shadow-xs">A</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

        {/* Centered 'Review Us on Google' CTA Button */}
        <motion.div variants={textVariants} className="mt-12 sm:mt-16 flex justify-center w-full">
          <a
            href={SITE_CONFIG.links.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#E8F0EA]/60 border border-[#1F5C4F] text-[#1F5C4F] text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1F5C4F] focus:ring-offset-2"
          >
            {/* Monochrome Forest Green Google 'G' Icon with exact hover rotation matching Children's Care button icon */}
            <svg className="w-4 h-4 fill-[#1F5C4F] group-hover:rotate-12 transition-transform duration-300 shrink-0" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <span>Review Us on Google</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
