import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Leaf, ArrowRight, Star, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

// Config object for easy content editing
const HERO_CONFIG = {
  trustLine: "2+ Years of Experience",
  heroImageAlt: "Dr. Hiba Mazhar, Homeopathic Doctor",
  cardTitle: "Gentle Care, Personal Attention.",
  cardSubtext: "Safe, effective and tailored homeopathic solutions for you and your family.",
};

export default function HeroSection({ mousePos }) {
  const [cardHovered, setCardHovered] = useState(false);

  // Parallax physics springs based on normalized mousePos (-1 to 1)
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  
  const mouseX = useSpring(mousePos.x, springConfig);
  const mouseY = useSpring(mousePos.y, springConfig);

  // 3D Perspective Tilt for Right Visual
  const rotateX = useTransform(mouseY, [-1, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [-1, 1], [-6, 6]);

  // Independent Parallax Offsets
  const heroImageX = useTransform(mouseX, [-1, 1], [-15, 15]);
  const heroImageY = useTransform(mouseY, [-1, 1], [-15, 15]);

  const floatCardX = useTransform(mouseX, [-1, 1], [22, -22]);
  const floatCardY = useTransform(mouseY, [-1, 1], [22, -22]);

  const leaf1X = useTransform(mouseX, [-1, 1], [-30, 30]);
  const leaf1Y = useTransform(mouseY, [-1, 1], [-30, 30]);

  const leaf2X = useTransform(mouseX, [-1, 1], [40, -40]);
  const leaf2Y = useTransform(mouseY, [-1, 1], [25, -25]);

  // Staggered Animation Variants for Page Load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge border border-[#8FAF9A]/40 shadow-sm">
                <Leaf className="w-4 h-4 text-[#1F5C4F]" />
                <span className="text-xs font-semibold tracking-wide text-[#1F5C4F] uppercase">
                  Gentle. Natural. Effective.
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C2925] leading-[1.12] mb-4"
            >
              Healing Naturally, <br />
              <span className="text-[#1F5C4F] italic font-normal relative inline-block">
                Living Better.
                {/* Underline Leaf Glow SVG */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#C9A96E]/60"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Gold Ornamental Leaf Line Divider */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 my-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent" />
              <div className="flex items-center gap-1 text-[#C9A96E]">
                <Leaf className="w-3.5 h-3.5 fill-[#C9A96E]/20" />
                <Leaf className="w-4 h-4 fill-[#C9A96E]/40 -mt-1" />
                <Leaf className="w-3.5 h-3.5 fill-[#C9A96E]/20" />
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-[#C9A96E] to-transparent" />
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#66736D] max-w-xl leading-relaxed mt-2 mb-8 font-normal"
            >
              Personalized homeopathic treatment to restore balance, boost immunity, and bring lasting wellness. Safe and gentle solutions tailored specifically for you and your family.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#footer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1F5C4F] hover:bg-[#17483E] text-white text-base font-semibold shadow-lg shadow-[#1F5C4F]/25 hover:shadow-xl hover:shadow-[#1F5C4F]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#treatments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/80 hover:bg-white border border-[#1F5C4F]/40 text-[#1F5C4F] text-base font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#8FAF9A] group-hover:text-[#1F5C4F] group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </motion.div>

            {/* Social Proof Row & Experience Line */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[#8FAF9A]/20 w-full">
              {/* Overlapping Avatars & 5-Star Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {SITE_CONFIG.socialProof.avatars.map((avatarUrl, idx) => (
                    <img
                      key={idx}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#F8F6F1] object-cover shadow-sm"
                      src={avatarUrl}
                      alt="Patient Avatar"
                    />
                  ))}
                </div>

                <div className="flex flex-col">
                  {/* 5 Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#1C2925] mt-0.5 font-medium">
                    {SITE_CONFIG.socialProof.fullTextPrefix}
                    <strong className="text-[#1F5C4F] font-bold">
                      {SITE_CONFIG.socialProof.patientCountText}
                    </strong>
                  </span>
                </div>
              </div>

              {/* Separator Dot for Desktop */}
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#8FAF9A]/40" />

              {/* Experience Line */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#E8F0EA] border border-[#8FAF9A]/40 flex items-center justify-center text-[#1F5C4F] shadow-xs shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#1F5C4F]" />
                </div>
                <span className="text-xs font-semibold text-[#1C2925] tracking-wide">
                  {HERO_CONFIG.trustLine}
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN - Hero Visual Focus & Multi-layer 3D Parallax */}
          <div className="lg:col-span-6 relative perspective-1000 flex items-center justify-center">
            
            {/* Background Soft Glow Circle behind Hero Image */}
            <motion.div
              style={{ x: heroImageX, y: heroImageY }}
              className="absolute w-[85%] h-[85%] rounded-full bg-radial from-[#8FAF9A]/25 via-[#E8F0EA]/30 to-transparent blur-2xl z-0"
            />

            {/* Main 3D Perspective Hero Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-lg lg:max-w-xl z-10 group flex items-center justify-center"
            >

              {/* Framed Photo with Organic Rounded Frame */}
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/80 bg-[#E8F0EA]/30">
                <img
                  src="/images/hero-replacement.jpg"
                  alt="Dr. Hiba Mazhar, Homeopathic Doctor"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-auto max-h-[480px] sm:max-h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Leaf Particle 1 (Top Left) */}
              <motion.div
                style={{ x: leaf1X, y: leaf1Y }}
                animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/80 text-[#1F5C4F]"
              >
                <Leaf className="w-6 h-6 text-[#1F5C4F]" />
              </motion.div>

              {/* Floating Leaf Particle 2 (Top Right) */}
              <motion.div
                style={{ x: leaf2X, y: leaf2Y }}
                animate={{ y: [0, 15, 0], rotate: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-2 right-6 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#E8F0EA]/90 backdrop-blur-md shadow-md border border-[#8FAF9A]/30 text-[#8FAF9A]"
              >
                <Sparkles className="w-4 h-4 text-[#C9A96E]" />
              </motion.div>

              {/* Floating Info Card ("Gentle Care, Personal Attention.") */}
              <motion.div
                style={{ x: floatCardX, y: floatCardY }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setCardHovered(true)}
                onHoverEnd={() => setCardHovered(false)}
                className={`absolute -bottom-4 right-0 sm:right-2 z-30 max-w-[270px] sm:max-w-[310px] glass-card p-4 sm:p-5 rounded-2xl border border-white/90 shadow-xl transition-all duration-300 ${
                  cardHovered ? 'scale-105 shadow-[#1F5C4F]/15' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Badge Icon */}
                  <div className="w-9 h-9 rounded-full bg-[#C9A96E] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#C9A96E]/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C2925] leading-snug">
                      {HERO_CONFIG.cardTitle}
                    </h3>
                    <p className="text-xs text-[#66736D] leading-relaxed mt-0.5">
                      {HERO_CONFIG.cardSubtext}
                    </p>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5C4F] hover:text-[#17483E] mt-1.5 group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Subtle Watermark Leaf Graphic in Corner */}
                <Leaf className="absolute -bottom-2 -right-2 w-14 h-14 text-[#8FAF9A]/10 pointer-events-none transform -rotate-45" />
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
