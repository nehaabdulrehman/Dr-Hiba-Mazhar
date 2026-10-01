import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

// Inline SVGs for Social Media Platforms
const SocialIcons = {
  instagram: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  threads: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 192 192" aria-hidden="true">
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.005 97.58 44.005C72.228 44.005 52.348 64.9142 52.348 95.8943C52.348 126.874 72.228 147.784 97.58 147.784C118.847 147.784 133.568 134.773 138.318 116.666H115.197C111.455 125.795 104.091 129.839 96.586 129.839C80.89 129.839 70.835 116.036 70.835 95.8943C70.835 75.7525 80.89 61.9497 96.586 61.9497C111.838 61.9497 120.472 73.1896 121.06 91.0969C114.73 89.2891 107.568 88.5135 99.497 88.9883C76.993 90.3129 64.945 101.442 64.945 117.27C64.945 132.062 76.711 142.128 92.518 142.128C106.662 142.128 117.761 133.856 121.579 121.731C125.568 129.988 132.88 135.295 142.753 135.295C157.067 135.295 167.318 123.633 167.318 102.836C167.318 64.4447 141.246 36 96.883 36C49.99 36 24.682 68.3243 24.682 108.57C24.682 148.816 49.99 181.14 96.883 181.14C122.955 181.14 144.382 171.189 157.545 154.215L142.853 139.799C132.748 152.936 116.892 160.852 96.883 160.852C61.42 160.852 42.946 135.792 42.946 108.57C42.946 81.3484 61.42 56.2882 96.883 56.2882C130.648 56.2882 149.055 77.2952 149.055 102.836C149.055 113.627 143.993 118.57 136.938 118.57C130.73 118.57 126.832 113.82 126.832 104.996V88.9883H141.537ZM99.497 106.666C104.28 106.38 108.975 107.039 113.567 108.536C112.569 119.539 105.748 124.966 96.963 124.966C87.426 124.966 82.261 118.53 82.261 109.845C82.261 101.408 88.91 106.039 99.497 106.666Z" />
    </svg>
  ),
  tiktok: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.12V9.4a6.27 6.27 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V9.37a8.16 8.16 0 0 0 4.95 1.66v-3.45a4.85 4.85 0 0 1-1-.89z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  ),
  whatsapp: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  )
};

export default function Footer() {
  const footerData = SITE_CONFIG.footerSection;

  return (
    <footer 
      id="footer" 
      className="relative overflow-hidden scroll-mt-28 sm:scroll-mt-36 bg-[#F8F6F1] text-[#1C2925] pt-14 sm:pt-16 pb-5 sm:pb-6 px-6 lg:px-12 border-t border-[#8FAF9A]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 4-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND & INTRO */}
          <div className="flex flex-col items-start pr-2">
            <a href="#home" className="inline-block group">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F5C4F] tracking-tight group-hover:text-[#16443A] transition-colors">
                {footerData.brandName}
              </h2>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-[#66736D] leading-relaxed max-w-sm font-sans">
              {footerData.introText}
            </p>
          </div>

          {/* COLUMN 2: GET IN TOUCH WITH US */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-xs sm:text-sm text-[#1F5C4F] uppercase tracking-wider mb-5 sm:mb-6">
              {footerData.getInTouch.heading}
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Address */}
              <a 
                href={footerData.getInTouch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-xs sm:text-sm text-[#66736D] hover:text-[#1F5C4F] transition-colors"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1F5C4F] group-hover:bg-[#16443A] text-white flex-shrink-0 flex items-center justify-center transition-colors shadow-sm shadow-[#1F5C4F]/20 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="leading-snug">
                  {footerData.getInTouch.addressText}
                </span>
              </a>

              {/* Phone */}
              <a 
                href={footerData.getInTouch.phoneUrl}
                className="group flex items-center gap-3 text-xs sm:text-sm text-[#66736D] hover:text-[#1F5C4F] transition-colors"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1F5C4F] group-hover:bg-[#16443A] text-white flex-shrink-0 flex items-center justify-center transition-colors shadow-sm shadow-[#1F5C4F]/20">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-medium">
                  {footerData.getInTouch.phoneDisplay}
                </span>
              </a>

              {/* Email */}
              <a 
                href={footerData.getInTouch.emailUrl}
                className="group flex items-center gap-3 text-xs sm:text-sm text-[#66736D] hover:text-[#1F5C4F] transition-colors"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1F5C4F] group-hover:bg-[#16443A] text-white flex-shrink-0 flex items-center justify-center transition-colors shadow-sm shadow-[#1F5C4F]/20">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-medium">
                  {footerData.getInTouch.emailDisplay}
                </span>
              </a>
            </div>
          </div>

          {/* COLUMN 3: CLINIC HOURS */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-xs sm:text-sm text-[#1F5C4F] uppercase tracking-wider mb-5 sm:mb-6">
              {footerData.clinicHours.heading}
            </h3>
            
            <div className="flex flex-col gap-4">
              {footerData.clinicHours.schedules.map((schedule, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <p className="font-semibold text-[#1C2925]">{schedule.days}</p>
                  <p className="text-[#66736D] mt-0.5">{schedule.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 4: OUR SOCIAL MEDIA */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-xs sm:text-sm text-[#1F5C4F] uppercase tracking-wider mb-5 sm:mb-6">
              {footerData.socialMedia.heading}
            </h3>
            
            <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
              {footerData.socialMedia.links
                .filter(link => link.url && link.url.trim() !== '')
                .map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel || link.name}
                    title={link.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1F5C4F] hover:bg-[#16443A] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1F5C4F]/25 group"
                  >
                    {SocialIcons[link.id] || null}
                  </a>
                ))}
            </div>
          </div>

        </div>

        {/* BOTTOM DIVIDER & COPYRIGHT LINE */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-6 border-t border-[#8FAF9A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs sm:text-sm text-[#66736D] pr-14 sm:pr-0">
          <span>{footerData.bottomBar.copyright}</span>
          <span className="font-medium text-[#1C2925]/70">{footerData.bottomBar.designation}</span>
        </div>

      </div>
    </footer>
  );
}
