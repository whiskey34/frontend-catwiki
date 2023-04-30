const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// export for proxy use to node backend

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // url: "https://uploader-devch-app.herokuapp.com/"
    // url: "https://devchallenges_upload_server.herokuapp.com"
  },

  // publicPath: "./",
}