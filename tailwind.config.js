/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F5C4F",       // Medical Green
          hover: "#17483E",         // Darker Medical Green Hover
          secondary: "#8FAF9A",     // Healing Sage
          mint: "#E8F0EA",          // Light Background (Calm Mint)
          cream: "#F8F6F1",         // Warm Cream (Soft Hero Background)
          accent: "#C9A96E",        // Warm Gold (Trust & Care)
          dark: "#1C2925",          // Headings / Deep Forest Text
          muted: "#66736D",         // Muted Text
          card: "#FFFFFF"           // Pure White
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'fog-radial': 'radial-gradient(circle at 50% 50%, rgba(232, 240, 234, 0.8) 0%, rgba(248, 246, 241, 0) 70%)',
        'sage-radial': 'radial-gradient(circle at 80% 20%, rgba(143, 175, 154, 0.15) 0%, rgba(248, 246, 241, 0) 60%)',
        'gold-glow': 'radial-gradient(circle at 50% 50%, rgba(201, 169, 110, 0.12) 0%, rgba(248, 246, 241, 0) 50%)',
      },
      animation: {
        'smoke-float-1': 'smokeFloat1 25s ease-in-out infinite alternate',
        'smoke-float-2': 'smokeFloat2 30s ease-in-out infinite alternate',
        'smoke-float-3': 'smokeFloat3 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 5s ease-in-out infinite alternate',
      },
      keyframes: {
        smokeFloat1: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translate(40px, -30px) scale(1.15) rotate(5deg)', opacity: '0.85' },
          '100%': { transform: 'translate(-20px, 20px) scale(0.95) rotate(-3deg)', opacity: '0.5' },
        },
        smokeFloat2: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'translate(-50px, 40px) scale(1.2) rotate(-8deg)', opacity: '0.75' },
          '100%': { transform: 'translate(30px, -25px) scale(1.05) rotate(4deg)', opacity: '0.6' },
        },
        smokeFloat3: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translate(25px, 25px) scale(1.1)', opacity: '0.7' },
          '100%': { transform: 'translate(-35px, -15px) scale(0.9)', opacity: '0.3' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' }
        },
        floatGentle: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
