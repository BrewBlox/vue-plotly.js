module.exports = {
  context: __dirname,

  entry: {
    'vue-plotly': './src/plotly.vue',
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