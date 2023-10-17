const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),

    // header
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-header.html'),
      filename: 'wbp-header.html',
    }),

    // banner
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-banner.html'),
      filename: 'wbp-banner.html',
    }),

    // help
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-help.html'),
      filename: 'wbp-help.html',
    }),

    // client
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-client.html'),
      filename: 'wbp-client.html',
    }),

    // team
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-team.html'),
      filename: 'wbp-team.html',
    }),

    // footer
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-footer.html'),
      filename: 'wbp-footer.html',
    }),

    // modal
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-modal.html'),
      filename: 'wbp-modal.html',
    }),

    // popup
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-popup.html'),
      filename: 'wbp-popup.html',
    }),

    //*

    // header
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-header.html',
      location: 'wbp-header',
      template_filename: ['index.html'],
    }),

    // banner
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-banner.html',
      location: 'wbp-banner',
      template_filename: ['index.html'],
    }),

    // help
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-help.html',
      location: 'wbp-help',
      template_filename: ['index.html'],
    }),

    // client
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-client.html',
      location: 'wbp-client',
      template_filename: ['index.html'],
    }),

    // team
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-team.html',
      location: 'wbp-team',
      template_filename: ['index.html'],
    }),

    // footer
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-footer.html',
      location: 'wbp-footer',
      template_filename: ['index.html'],
    }),

    // modal
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-modal.html',
      location: 'wbp-modal',
      template_filename: ['index.html'],
    }),

    // popup
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-popup.html',
      location: 'wbp-popup',
      template_filename: ['index.html'],
    }),

    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join('src', 'static'),
              destination: 'dist',
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
};
