import viteStaticCopy from 'vite-plugin-static-copy';

export default {
  // 他の設定...
  plugins: [
    // 他のプラグイン...
    viteStaticCopy({
      targets: [
        { src: 'node_modules/cesium/Build/Cesium/Workers', dest: 'Workers' },
        { src: 'node_modules/cesium/Build/Cesium/ThirdParty', dest: 'ThirdParty' },
        { src: 'node_modules/cesium/Build/Cesium/Assets', dest: 'Assets' },
        { src: 'node_modules/cesium/Build/Cesium/Widgets', dest: 'Widgets' },
      ],
    }),
  ],
};

