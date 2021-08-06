import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

import "./map.scss";

const loader = new Loader({
  apiKey: "",
});

const markerPosition = { lat: 59.968137, lng: 30.316272 };

const Map = () => {
  useEffect(() => {
    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: markerPosition,
      });

      new google.maps.Marker({ position: markerPosition, map });
    });
  }, []);

  return <div className="map" id="map" />;
};

export default Map;
