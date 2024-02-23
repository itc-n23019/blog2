import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Cesium のエイリアスを設定
      config.resolve.alias['cesium'] = path.resolve(process.cwd(), 'node_modules/cesium/Source');
    }
    return config;
  },
};

export default nextConfig;

