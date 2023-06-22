import styled from "styled-components";

export const Header = styled.header`
  padding: 10px;
  background-color: #2a2827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 5%;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 20px;
    color: #eabc54;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #eabc54;
  margin-left: 10px;
  opacity: 1;
`;

export const Box = styled.div`
  img {
    border-radius: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border: 3px solid white;
  }
`;

export const Question = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgb(234, 188, 84);
  height: auto;
  padding: 20px;
  color: white;
  margin-top: -30px;

  p {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
`;

export const Answer = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  color: black;
  background-color: white;
  height: auto;

  p {
    text-align: center;
  }
`;

export const Footer = styled.p`
  text-align: center;
  padding: 5px;
  background: #2a2827;
  color: #eabc54;
`;
