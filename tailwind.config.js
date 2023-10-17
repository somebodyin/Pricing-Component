/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'customGradient': 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
          'customGradientBottom': 'linear-gradient(to bottom, #989eed, #7478e1)'
          
      },
      colors: {
        "BrightGrayishBlue": "hsl(240, 78%, 98%)",
        "LightGrayishBlue": "hsl(234, 14%, 74%)",
        "GrayishBlue": "hsl(233, 13%, 49%)",
        "DarkGrayishBlue": "hsl(232, 13%, 33%)",
      },
      dropShadow: {
        'purple': '0 25px 25px rgba(117, 121, 225, 0.1)',
      }
    },
  },
  plugins: [],
}
