/* eslint-disable jsx-a11y/alt-text */
"use client";

import NavbarButton from "../NavbarButton/index";
import Button from "../Button/index";
import { Header, ContainerIcons, Title } from "./styles";
import { BsLinkedin, BsDiscord, BsGithub } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <Header>
      <ContainerIcons>
        <Image src={logo} width={50} height={50} alt="teste" />
        <Title>Iluda.me</Title>
        <div>
          <NavbarButton href="/historico" title="HISTÓRICO" />
          <NavbarButton href="/historico" title="FRASES" />
        </div>
      </ContainerIcons>
      <ContainerIcons>
        <a href="https://www.linkedin.com/in/guilhermejfmello/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://discord.gg/d84JqRu" target="_blank">
          <BsDiscord />
        </a>
        <a href="https://github.com/X5GuilhermeBR" target="_blank">
          <BsGithub />
        </a>
        <Button />
      </ContainerIcons>
    </Header>
  );
};
export default Navbar;
