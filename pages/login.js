import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="Uber Logo" />
      <Title>Log in to access your Account</Title>
      <HeadImage
        src="https://i.ibb.co/CsV9RYZ/login-image.png"
        alt="Uber Login Image"
      />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
}

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`;

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full 
`;

const UberLogo = tw.img` 
    h-10 w-auto object-container self-start 
`;

const Title = tw.div` 
    text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
    object-contain w-full 
`;
export default Login;
