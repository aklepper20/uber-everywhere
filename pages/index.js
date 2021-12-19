import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-blue-300 h-screen 

`;
const Map = tw.div`
  bg-red-500 flex-1
`;
const ActionItems = tw.div`
  flex-1
`;
