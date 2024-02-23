import { useEffect } from 'react';

const SatelliteMap = () => {
  useEffect(() => {
    let map;

    const initMap = () => {
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      fetchSatelliteData();
    };

    const fetchSatelliteData = () => {
      const url = 'https://mgpn.org/api/space/getobject.cgi?num=12345';

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const position = {
            lat: data.orbital.position.latitude,
            lng: data.orbital.position.longitude,
          };

          new window.google.maps.Marker({
            position: position,
            map: map,
            title: data.orbital.name,
          });
        })
        .catch((error) =>
          console.error('Error fetching satellite data:', error)
        );
    };

    window.google ? initMap() : (() => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
    })();

    return () => {
      if (map) {
        map = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default SatelliteMap;

