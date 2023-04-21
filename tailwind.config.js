/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      'fhd': '1920px',
      'qhd': '2560px',
      'uhd': '3840px',
    },
    extend: {
      colors: {
        'primary': '#524AAD',
        'accent-1': '#6058C2',
        'accent-2': '#524AAD',
        'accent-3': '#242058',
        'neutral-1': '#E7E7E7',
        'neutral-2': '#CBCBCB',
        'warning': '#D67F2F',
        'success': '#64A753'
      },
      borderRadius: {
        'custom-button': '10px',
        'custom-input': '10px',
        'custom-card': '15px',
        'custom-modal': '15px'
      },
      height: {
        'button': '50px',
        'input': '50px',
      }
    },
  },
  plugins: [],
}

