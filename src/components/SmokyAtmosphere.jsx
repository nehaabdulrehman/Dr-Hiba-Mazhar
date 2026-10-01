import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SmokyAtmosphere({ mousePos }) {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  const bgOffsetY = useTransform(scrollY, [0, 800], [0, 150]);

  // Subtle mouse drift calculations
  const mouseX = mousePos.x * 20;
  const mouseY = mousePos.y * 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing soft organic mist & floating golden pollen/leaf dust
    const particles = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 40 + 20,
      baseAlpha: Math.random() * 0.12 + 0.04,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.3 - 0.1,
      color: Math.random() > 0.4 ? '143, 175, 154' : '201, 169, 110', // Sage green & Warm gold
      pulse: Math.random() * Math.PI,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw particle mists
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.015;

        // Wrap around screen
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulse) * 0.03;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, currentAlpha)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Dynamic Smoky Fog Layer 1 - Mint Soft Mist */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.6, 0.85, 0.5, 0.6]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: mouseX * 0.5, y: mouseY * 0.5 }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-radial from-[#E8F0EA]/80 via-[#8FAF9A]/20 to-transparent blur-3xl"
      />

      {/* Dynamic Smoky Fog Layer 2 - Golden Warm Light Ray */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 1.2, 1.05, 1],
          opacity: [0.4, 0.7, 0.5, 0.4]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: -mouseX * 0.7, y: -mouseY * 0.7 }}
        className="absolute top-1/4 right-10 w-[700px] h-[700px] rounded-full bg-radial from-[#C9A96E]/15 via-[#8FAF9A]/10 to-transparent blur-3xl"
      />

      {/* Dynamic Smoky Fog Layer 3 - Medical Green Deep Atmosphere */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.5, 0.3, 0.3]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: mouseX * 0.3, y: mouseY * 0.3 }}
        className="absolute bottom-10 left-1/3 w-[800px] h-[600px] rounded-full bg-radial from-[#8FAF9A]/20 via-[#E8F0EA]/30 to-transparent blur-3xl"
      />

      {/* HTML5 Canvas for Organic Floating Pollen / Fog Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F1]/40 via-transparent to-[#F8F6F1]/80" />
    </div>
  );
}
