import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-blue-300 h-screen 

`;

const ActionItems = tw.div`
  flex-1
`;
