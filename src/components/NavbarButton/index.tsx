/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import { ButtonStyles } from "./styles";
import NavbarButtonProps from "./interaces";

const NavbarButton: React.FC<NavbarButtonProps> = ({
  href,
  title,
}: NavbarButtonProps) => {
  return (
    <Link href={href}>
      <ButtonStyles target="_blank">{title}</ButtonStyles>
    </Link>
  );
};
export default NavbarButton;
