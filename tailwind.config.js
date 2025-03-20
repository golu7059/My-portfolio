/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 15s infinite ease',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'gradient': 'animate-gradient 4s ease infinite',
        'float': 'float 10s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 0.8s ease-in-out',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(0, 20px) scale(0.9)' },
          '75%': { transform: 'translate(-20px, -15px) scale(1.05)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'animate-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 86, 48, 0.6)',
        'glow-lg': '0 0 25px rgba(255, 86, 48, 0.7)',
      },
    },
  },
  plugins: [daisyui],
};
