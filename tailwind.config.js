/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-300-400': 'var(--color-primary-gradient)',
        'secondary-300': 'var(--color-secondary-300)',
        'dark': 'var(--color-dark)',
        'dark-500': 'var(--color-dark-500)',
        'gray-400': 'var(--color-gray-400)',
        'light': 'var(--color-light)',
      },
      gradientColorStops: {
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
      },
    },
  },
  plugins: [],
}

// // color theme
// --color-dark: #2E2E2E;
// --color-dark-500:  #414141;
// --color-gray-400: #777777;
// --color-light:  #FFFFFF;

// // color primary
// --color-primary-300: #FFCC21;
// --color-primary-400: #FF963C;
// --color-primary-500: #EA6C00;
// --color-primary-gradient: linear-gradient(180deg, var(--color-primary-300) 0%, var(--color-dark-500) 100%);
