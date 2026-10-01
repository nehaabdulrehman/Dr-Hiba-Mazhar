import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WomensCareSection from './components/WomensCareSection';
import ChildrensCareSection from './components/ChildrensCareSection';
import ProcessSection from './components/ProcessSection';
import PatientStoriesSection from './components/PatientStoriesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import SmokyAtmosphere from './components/SmokyAtmosphere';
import AppointmentModal from './components/AppointmentModal';
import StickyWhatsAppButton from './components/StickyWhatsAppButton';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track cursor position normalized from -1 to 1 for desktop parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize values between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SmoothScroll modalOpen={appointmentModalOpen}>
      <div className="relative min-h-screen bg-[#F8F6F1] text-[#1C2925] font-sans overflow-hidden">
        {/* Soft Atmospheric Fog & Motion Shader Background */}
        <SmokyAtmosphere mousePos={mousePos} />

        {/* Navigation Header */}
        <Navbar onOpenAppointment={() => setAppointmentModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection
            onOpenAppointment={() => setAppointmentModalOpen(true)}
            mousePos={mousePos}
          />
          <AboutSection />
          <WomensCareSection onOpenAppointment={() => setAppointmentModalOpen(true)} />
          <ChildrensCareSection onOpenAppointment={() => setAppointmentModalOpen(true)} />
          <ProcessSection />
          <PatientStoriesSection />
          <FaqSection />
          <Footer />
        </main>

        {/* Global Sticky WhatsApp Button */}
        <StickyWhatsAppButton />

        {/* Interactive Appointment Modal */}
        <AppointmentModal
          isOpen={appointmentModalOpen}
          onClose={() => setAppointmentModalOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
