module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        screens: {
          'tablet': ' 640px',
          'laptop': '1024px',
          'desktop': '1280px',
        }
      }
    },
    autoprefixer: {},
  },
}
