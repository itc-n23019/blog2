import { useEffect, useState } from 'react';
import { Viewer, Entity } from 'resium';
// JavaScriptファイルをインポート
import { Color } from "cesium";

// CSSファイルをインポート
import "cesium/Build/Cesium/Widgets/widgets.css";
import Cesium from 'cesium';

Cesium.Ion.defaultAccessToken = process.env.CESIUM_ION_ACCESS_TOKEN;

const SatelliteMap2 = () => {
  const [satellitePosition, setSatellitePosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchSatelliteData = () => {
      const url = 'https://mgpn.org/api/space/getobject.cgi?num=37158';

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const newPosition = { lat: data.orbital.position.latitude, lng: data.orbital.position.longitude };
          setSatellitePosition(newPosition);
        })
        .catch((error) =>
          console.error('Error fetching satellite data:', error)
        );
    };

    fetchSatelliteData();
    const interval = setInterval(fetchSatelliteData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Viewer full>
      <Entity position={satellitePosition} />
    </Viewer>
  );
};

export default SatelliteMap2;

