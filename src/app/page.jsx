/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect, useState } from "react";
import { quotes } from "../data/quotes";
import _ from "lodash";
import { Header, ContainerIcons, Main, Title, Box, Question, Answer, Footer, SocialMedias } from "./styles";
import { BsLinkedin, BsDiscord, BsGithub} from 'react-icons/bs';
import logo from "../assets/logo.png"
import profile from "../assets/profile.jpg"
import bg from '../assets/image.jpg'
import Image from 'next/image'
import Button from '../components/Button/index'
import {
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

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
    
    <a href="https://www.linkedin.com/in/guilhermejfmello/">
    <BsLinkedin />
    </a>
    <a href="https://discord.gg/d84JqRu">
    <BsDiscord />
    </a>
    <a href="https://github.com/X5GuilhermeBR">
    <BsGithub />
    </a>
    <Button />
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
      <SocialMedias>
      <span>Compartilhe</span>
      <TwitterShareButton
              title={`${quote} 
              \nvia: `}
              url={"https://ilude.me"}
            >
              <TwitterIcon size={24} round />
      </TwitterShareButton>
      </SocialMedias>
    </Main>
    <Footer>Desenvolvido com muita desgraça por <a href="https://bio.site/_otaldogui" target="_blank">@otaldogui__</a></Footer>
    </>
  );
};

export default Home;
