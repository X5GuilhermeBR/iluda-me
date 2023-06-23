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
    transition: transform 0.5s; /* Animation */

    :hover {
      transform: scale(
        1.6
      ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: calc(100vh - 120px);
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
  -webkit-box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);

  p {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }
`;

export const Answer = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  color: black;
  background-color: white;
  height: auto;
  -webkit-box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 8px 10px 5px 0px rgba(0, 0, 0, 0.2);

  p {
    text-align: center;
    font-size: 16px;
  }
`;

export const SocialMedias = styled.div`
  margin-top: 10px;
  display: grid;

  span {
    padding: 7px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin: 4px;
    }
  }
`;

export const Footer = styled.p`
  text-align: center;
  padding: 15px;
  background: #2a2827;
  color: white;

  a {
    color: #eabc54;
    cursor: pointer;
  }
`;
