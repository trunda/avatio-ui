const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    autoprefixer({
      add: true,
      grid: true
    }),
  ],
};
