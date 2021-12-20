import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/CarList";

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWx5a2xlcHBlciIsImEiOiJja3hjbWxjdzcwaWVtMndva3VubG82aDI5In0.v5Msp0VYugkAHNlc_iud1Q`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((carObj, index) => (
          <Car key={index}>
            <CarImage src={carObj.imgUrl} alt={carObj.service} />
            <CarDetails>
              <Service>{carObj.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * carObj.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

const Wrapper = tw.div`
   flex flex-col flex-1 overflow-y-scroll
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`;
const CarList = tw.div`
overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center 
`;
const CarImage = tw.img`
    h-14 mr-4
`;
const CarDetails = tw.div`
    flex-1
`;
const Service = tw.div`
    font-medium 
`;
const Time = tw.div`
    text-xs text-blue-500
`;
const Price = tw.div`
    text-sm
`;
export default RideSelector;
