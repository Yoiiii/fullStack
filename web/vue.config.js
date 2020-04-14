module.exports = {
    outputDir:__dirname+'/../public/web',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/web/'
      : '/'
  }