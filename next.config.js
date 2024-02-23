// next.config.js

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('cesium'),
        }),
      );
    }
    return config;
  },
};

