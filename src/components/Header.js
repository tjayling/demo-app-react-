import React from "react";
import "./HeaderStyles.css";
import languageImage from "../img/language.png";

const Header = ({
  home,
  about,
  contact,
  languageSetter,
  title,
}) => {
  return (
    <header>
      <nav>
        <img src={languageImage} alt="Language" onClick={languageSetter} />
        <a href="/">{home}</a>
        <a href="/">{about}</a>
        <a href="/">{contact}</a>
      </nav>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
