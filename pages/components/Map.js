import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
    flex-1
`;
export default Map;
