import { Viewer, Ion } from 'cesium';

const Map = () => {
  Ion.defaultAccessToken = process.env.CESIUM_ION_ACCESS_TOKEN;

  return (
    <Viewer full>
      <div id="cesiumContainer" style={{ height: '100vh' }} />
    </Viewer>
  );
};

export default Map;

