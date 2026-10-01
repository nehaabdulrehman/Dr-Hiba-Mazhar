import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Calendar, 
  Menu, 
  X, 
  ExternalLink 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [activeSection, setActiveSection] = useState('home');

  const navRef = useRef(null);

  // Scroll listener for enhanced shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'services', 'womens-care', 'childrens-care', 'about', 'reviews', 'faq', 'contact', 'footer'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle mobile accordion
  const toggleMobileAccordion = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Action / link resolver
  const handleItemClick = (item, e) => {
    if (item.isAction && item.href === 'action:book') {
      e.preventDefault();
      onOpenAppointment();
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    } else if (item.isExternal && item.href.startsWith('external:')) {
      const key = item.href.replace('external:', '');
      const targetUrl = SITE_CONFIG.links[key];
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    } else {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 lg:left-12 lg:right-12 max-w-6xl mx-auto z-50 pointer-events-none"
    >
      {/* FLOATING CAPSULE BAR */}
      <div
        className={`pointer-events-auto bg-white/90 backdrop-blur-md border border-white/80 shadow-lg shadow-[#1C2925]/[0.06] rounded-full px-5 py-2.5 sm:px-7 sm:py-3 transition-all duration-300 ${
          scrolled ? 'shadow-xl shadow-[#1C2925]/[0.12] bg-white/95 border-[#8FAF9A]/30' : ''
        }`}
      >
        {/* DESKTOP LAYOUT (1024px and up): Left text logo, Center HM monogram, Right all nav links */}
        <div className="hidden lg:flex items-center justify-between">
          
          {/* LEFT: "Dr. Hiba Mazhar" Text Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-serif font-bold text-lg text-[#1F5C4F] tracking-tight group-hover:text-[#17483E] transition-colors whitespace-nowrap">
              {SITE_CONFIG.doctorName}
            </span>
          </a>

          {/* CENTER: "HM" Text Monogram (No circle, no badge background) */}
          <a
            href="#home"
            title="Dr. Hiba Mazhar — Homeopathic Care"
            aria-label="Dr. Hiba Mazhar Homeopathy Home"
            className="flex items-center justify-center group"
          >
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#1F5C4F] tracking-widest select-none group-hover:scale-105 transition-transform duration-200">
              {SITE_CONFIG.monogramText}
            </span>
          </a>

          {/* RIGHT: HOME, SERVICES, ABOUT, CONTACT */}
          <nav className="flex items-center gap-5 sm:gap-6 lg:gap-7">
            {SITE_CONFIG.navigation.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isItemActive = activeSection === item.href.replace('#', '');

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase py-1 transition-colors duration-200 ${
                      isItemActive || activeDropdown === item.name
                        ? 'text-[#1F5C4F]'
                        : 'text-[#66736D] hover:text-[#1F5C4F]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#8FAF9A] transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180 text-[#1F5C4F]' : ''
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu aligned under link without overflowing */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full right-0 mt-3 w-60 bg-white/95 backdrop-blur-xl border border-[#8FAF9A]/20 rounded-2xl p-2 shadow-xl shadow-[#1C2925]/[0.08] z-50 overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleItemClick(subItem, e)}
                              className="group/sub flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#E8F0EA]/70 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-[#1C2925] group-hover/sub:text-[#1F5C4F] transition-colors">
                                  {subItem.name}
                                </span>
                                {(subItem.isExternal || subItem.isAction) && (
                                  <ExternalLink className="w-3 h-3 text-[#8FAF9A] opacity-60 group-hover/sub:opacity-100 group-hover/sub:text-[#1F5C4F]" />
                                )}
                              </div>
                              {subItem.desc && (
                                <span className="text-[10px] text-[#66736D] mt-0.5 line-clamp-1">
                                  {subItem.desc}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

        </div>

        {/* MOBILE LAYOUT (Below 1024px): Left Name, Center HM, Right Hamburger */}
        <div className="flex lg:hidden items-center justify-between">
          
          {/* Left Name Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-[#1F5C4F] tracking-tight">
              {SITE_CONFIG.doctorName}
            </span>
          </a>

          {/* Center HM Monogram Text */}
          <a
            href="#home"
            title="Dr. Hiba Mazhar — Homeopathic Care"
            aria-label="Dr. Hiba Mazhar Homeopathy Home"
            className="flex items-center justify-center"
          >
            <span className="font-serif font-bold text-lg text-[#1F5C4F] tracking-widest select-none">
              {SITE_CONFIG.monogramText}
            </span>
          </a>

          {/* Right Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#E8F0EA]/80 text-[#1C2925] hover:bg-[#E8F0EA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto mt-2 bg-white/95 backdrop-blur-xl border border-white/90 shadow-2xl rounded-3xl p-6 max-h-[80vh] overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex flex-col items-center justify-center pb-4 mb-3 border-b border-[#8FAF9A]/20">
              <span className="font-serif text-lg font-bold text-[#1C2925]">
                {SITE_CONFIG.doctorName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#66736D] mt-0.5">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {SITE_CONFIG.navigation.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isExpanded = mobileExpanded[item.name];

                return (
                  <div key={item.name} className="flex flex-col border-b border-[#8FAF9A]/15 pb-2">
                    <div className="flex items-center justify-between py-1.5">
                      <a
                        href={item.href}
                        onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                        className="text-sm font-semibold text-[#1C2925] hover:text-[#1F5C4F]"
                      >
                        {item.name}
                      </a>
                      {hasDropdown && (
                        <button
                          onClick={() => toggleMobileAccordion(item.name)}
                          className="p-1.5 text-[#66736D] hover:text-[#1F5C4F]"
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#1F5C4F]' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Content */}
                    <AnimatePresence>
                      {hasDropdown && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col gap-2 pl-3 py-2 bg-[#E8F0EA]/50 rounded-xl my-1"
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleItemClick(subItem, e)}
                              className="text-xs font-medium text-[#66736D] hover:text-[#1F5C4F] py-1 flex items-center justify-between pr-3"
                            >
                              <span>{subItem.name}</span>
                              {(subItem.isExternal || subItem.isAction) && (
                                <ExternalLink className="w-3 h-3 text-[#8FAF9A]" />
                              )}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile Drawer Bottom CTA Button */}
              <div className="pt-3 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#1F5C4F] text-white text-xs font-semibold shadow-md shadow-[#1F5C4F]/20 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#8FAF9A]" />
                  <span>Book Appointment</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
