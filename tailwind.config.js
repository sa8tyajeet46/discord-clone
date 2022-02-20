module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dis_blue:"#295DE7",
      dis_blurple:"#7289da",
      dis_purple:"35865f2",
      dis_green:"#3ba55c",
    },
  },
  variants:{
    extend:{},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}