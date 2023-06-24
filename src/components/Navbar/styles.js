import styled from "styled-components";

export const Header = styled.header`
  padding: 10px;
  background-color: #2a2827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 10%;
  }

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

export const Title = styled.h1`
  color: #eabc54;
  margin-left: 10px;
  opacity: 1;
`;
