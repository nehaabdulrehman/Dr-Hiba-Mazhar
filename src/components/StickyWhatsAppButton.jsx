import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/siteConfig';

export default function StickyWhatsAppButton() {
  const whatsappUrl = SITE_CONFIG.whatsapp?.url || SITE_CONFIG.links.whatsappUrl;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-40 right-4 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] md:right-6 md:bottom-6 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Hiba on WhatsApp"
        className="group relative flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1] rounded-full"
      >
        {/* DESKTOP HOVER PILL LABEL */}
        <span className="hidden md:inline-block px-3.5 py-1.5 rounded-full bg-[#1C2925]/90 backdrop-blur-md text-white text-xs font-semibold shadow-lg border border-white/10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none select-none motion-reduce:transition-none">
          Chat with us
        </span>

        {/* ROUND BUTTON CONTAINER */}
        <div className="relative flex items-center justify-center w-[52px] h-[52px] md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/35 group-hover:shadow-xl group-hover:shadow-[#25D366]/50 group-hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:transform-none">
          
          {/* GENTLE PULSE RING */}
          <span 
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:animate-none motion-reduce:hidden" 
            style={{ animationDuration: '3s' }}
          />

          {/* OFFICIAL WHATSAPP LOGO ICON */}
          <svg 
            className="w-7 h-7 md:w-8 md:h-8 fill-current text-white relative z-10" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>
      </a>
    </motion.div>
  );
}
