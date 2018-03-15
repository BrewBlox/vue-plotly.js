const ENV = process.env.NODE_ENV;
const development = ENV !== 'production';

module.exports = {
  context: __dirname,

  mode: ENV || 'development',

  entry: !development ? {
    'vue-plotly': './src/index.js',
    factory: './src/factory.js',
  } : {
    example: './example/example.js',
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
