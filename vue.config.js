const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// export for proxy use to node backend

module.exports = {
  devServer: {
    proxy: {
      '/breed': {
        target: 'https://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/breed': ''
        }
      },
      '/catapi': {
        target: 'https://api.thecatapi.com/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/catapi': ''
        }
      }
    }
    // url: "https://uploader-devch-app.herokuapp.com/"
    // url: "https://devchallenges_upload_server.herokuapp.com"
  },

  // publicPath: "./",
}