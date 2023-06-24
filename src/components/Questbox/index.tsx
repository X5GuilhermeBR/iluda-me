/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Question, Answer, SocialMedias } from "./styles";
import profile from "@/assets/profile.jpg";
import Image from "next/image";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { useEffect, useState } from "react";
import { quotes } from "@/data/quotes";
import _ from "lodash";

const Button = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(_.sample(quotes) || "");
  }, []);

  return (
    <>
      <Box>
        <Image src={profile} width={62} height={62} alt="teste" />
        <Question>
          <p>
            Uma dose diária de frase motivacional que nunca vai se tornar
            realidade.
          </p>
        </Question>
        <Answer>
          <p>{`"${quote}"`}</p>
        </Answer>
      </Box>
      <SocialMedias>
        <span>Compartilhe</span>
        <div>
          <TwitterShareButton
            title={`${quote} 
              \nvia: `}
            url={"https://iluda-me-x5guilhermebr.vercel.app"}
          >
            <TwitterIcon size={24} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={"https://iluda-me-x5guilhermebr.vercel.app"}
            source={"Ilude.me"}
            title={`${quote} 
        \nvia: `}
            summary={quote}
          >
            <LinkedinIcon size={24} round />
          </LinkedinShareButton>
          <EmailShareButton
            subject={"Frase do dia - Ilude.me"}
            body={quote}
            url={""}
          >
            <EmailIcon size={24} round />
          </EmailShareButton>
        </div>
      </SocialMedias>
    </>
  );
};
export default Button;
