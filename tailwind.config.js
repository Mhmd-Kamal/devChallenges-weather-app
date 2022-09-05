/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBG: '#100E1D',
        sideBG: '#1E213A',
        buttonBG: '#E7E7EB',
        darkGreyFont: ' #88869D',
        greyFont: '#A09FB1',
        paleGreyFont: '#E7E7EB',
      },
      backgroundImage: {
        clouds: "url('/cloud-background.png')",
      },
    },
  },
  plugins: [],
};
