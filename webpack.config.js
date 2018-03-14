module.exports = {
  context: __dirname,

  mode: process.env.NODE_ENV || 'development',

  entry: {
    'vue-plotly': './src/index.js',
    'factory': './src/factory.js',
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    library: 'vue-plotly.js',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loaders: ['vue-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue'],
  },
};