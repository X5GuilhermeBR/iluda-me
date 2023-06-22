/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect, useState } from "react";
import { quotes } from "../data/quotes";
import _ from "lodash";
import { Header, ContainerIcons, Main, Title, Box, Question, Answer, Footer } from "./styles";
import { BsLinkedin, BsDiscord, BsGithub} from 'react-icons/bs';
import logo from "../assets/logo.png"
import profile from "../assets/profile.jpg"
import bg from '../assets/image.jpg'
import Image from 'next/image'

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(_.sample(quotes) || "");
  }, []);

  return (
  <>
  <Header>
  <ContainerIcons>
    <Image 
      src={logo} width={50}
      height={50}
      />
    <Title>Iluda.me</Title>
  </ContainerIcons>
  <ContainerIcons>
    <a href="">
    <BsLinkedin />
    </a>
    <a href="">
    <BsDiscord />
    </a>
    <a href="">
    <BsGithub />
    </a>
  </ContainerIcons>
  </Header>
    <Main style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <Box>
      <Image 
      src={profile} width={62}
      height={62}/>
      <Question>
        <p>Uma dose diária de frase motivacional que nunca vai se tornar realidade.</p>
      </Question>
      <Answer>
      <p>{`"${quote}"`}</p>
      </Answer>
      </Box>
    </Main>
    <Footer>Desenvolvido com muita desgraça por @otaldogui__</Footer>
    </>
  );
};

export default Home;
