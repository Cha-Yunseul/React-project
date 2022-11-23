/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      maxHeight: {
        152: '50rem',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    styled: true,
    themes: ['emerald', 'dark', 'forest', 'synthwave', 'light'],
    darkTheme: 'dark',
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
