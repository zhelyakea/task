module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-cssnext')({ /* ...options */ }),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
  ]
}
