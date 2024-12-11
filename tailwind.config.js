const { PureComponent } = require('react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      Stone: {
        50: '#faf9f8',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
      Amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      gray: {
        50: '#f9fafb',
        100: '#f7fafc',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#1a202c',
      },
      Fuchsia: {
        200: '#edd5e7',
        800: '#86198f',
        900: '#701a75',
        925: '#663259',
        950: '#4a044e',
      },
      orange: {
        200: '#FCBF491A',
        300: '#FCBF49',
        400: '#FCBF49',
        500: '#FF8600'
      },
      Indigo: {
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        700: '#4B3F72'
      },
      green :{
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#19c919',
        500: '#37CC5F',
        800: '#166534'
      },
      Rose:{
        50:'#fff1f2',
        200: '#fecdd3',
        300: '#fecdd3',
      },
      Red: {
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b'
      },
      Indigo: {
        50 : '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#4975ae',
        600: '#4f46e5',
        700: '#2d4a77',
        800: '#294063',
        900: '#263754',
        950: '#1B263B'
      },
      purple: {
        50: '#E1E6F1',
        100: '#BCC5DF',
        200: '#99A4CC',
        300: '#7683B9',
        400: '#5462A6',
        500: '#3f5c98',  // Original color
        600: '#334A7B',
        700: '#2A3961',
        800: '#21304B',
        900: '#182135',
      },
      White: {
        200: '#F8F9FA'
      },
      yellow: {
        500: '#C4AB6E',
        
      }

      // ...
    },
    extend: {
      padding: {
        '5px': '5px',
        '10px': '10px'
      },
      transitionProperty: {
        width: "width"
      },
      width: {
        'w-800' : '800px',
        'w-700' : '700px'
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'din': ['"DIN 2014"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'poppins': ['"Poppins", sans-serif']
      },
      screens: {
        'xl2': '1400px',
      }
      
    }
  },
  plugins: [],
}

