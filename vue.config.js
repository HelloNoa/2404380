module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: './dist',
  publicPath: '/my-app/dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-app/dist'
    : '/'
}
