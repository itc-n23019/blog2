const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  // 他の設定...
  plugins: [
    // 他のプラグイン...
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' },
        { from: 'node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' },
        { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'Assets' },
        { from: 'node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' },
      ],
    }),
  ],
};

