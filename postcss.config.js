module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

"scripts"; {
  "build:css"; "tailwindcss -i ./src/index.css -o ./dist/output.css --watch"
}
