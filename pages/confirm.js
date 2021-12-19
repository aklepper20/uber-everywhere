import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

function Confirm() {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = () => {
    pickupCoordinates = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupCoordinates}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    dropoffCoordinates = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffCoordinates}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer></RideContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1
`;
export default Confirm;
