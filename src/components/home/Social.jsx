import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/nobuhiroharada1026"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook size={"1.5rem"} />
      </a>

      <a
        href="https://github.com/nobuhiroharada"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={"1.5rem"} />
      </a>
    </div>
  );
};

export default Social;
