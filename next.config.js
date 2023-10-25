const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // URL 接頭辞 "webpack:///mini-css-extract-plugin/" によるエラー回避
  // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/945
  webpack: (config) => {
    plugins: [
      (config.module.generator.asset.publicPath = '/_next/'),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: false
      })
    ];
    return config;
  }
};
