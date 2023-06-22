import styled from "styled-components";

export const ButtonStyles = styled.a`
  padding: 10px;
  border: none;
  background-color: #eabc54;
  border-radius: 5px;
  color: #2a2827;
  cursor: pointer;
  margin-left: 20px;
  font-size: 14px;
  transition: transform 0.5s; /* Animation */

    :hover {
      transform: scale(
        1.1
      ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }

  svg {
    color: #2a2827;
    margin-right: 7px;
    margin-left: 0px !important;
  }
`;
