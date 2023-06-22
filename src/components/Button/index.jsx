/* eslint-disable jsx-a11y/alt-text */
"use client";
import {ButtonStyles} from './styles'
import { BsFillSendFill } from 'react-icons/bs';

const Button = () => {
  return (
  <ButtonStyles href='https://docs.google.com/forms/d/e/1FAIpQLSf44XBjS0LYaF5XDgQMDP8hQC4fTY31EAFKsb25AEJMOSHYUQ/viewform'>
    <BsFillSendFill/>
    Envie sua motivação
    </ButtonStyles>
    );
};
export default Button;
