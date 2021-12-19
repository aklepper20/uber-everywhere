import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

function Map({ pickupCoordinates, dropoffCoordinates }) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    //dependecy listens for the variables to change, if the coordinate exists, send it to the map function
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    //sends dropoff cordinates to the map function, which creates another marker for the dropoff
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  //sets both pickup/dropoff location as a marker, since we passed the coordinates into the marker function
  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
    flex-1
`;
export default Map;
