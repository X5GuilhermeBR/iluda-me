/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  Main
} from "./styles";
import bg from "../assets/image.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Questbox from "@/components/Questbox";

const Home = () => {

  return (
    <>
      <Navbar />
      <Main
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Questbox/>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
