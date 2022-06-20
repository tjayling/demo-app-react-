import "./App.css";
import Header from "./components/Header.js";
import { useState } from "react";

function App() {
  // Set languages
  const languages = {
    english: ["Home", "About", "Contact", "Heloo mate"],
    spanish: ["Casa", "Sobre", "Contacto", "Holaa amigo"],
  };

  // Set initial states
  const [homeState, setHomeState] = useState(languages.english[0]);
  const [aboutState, setAboutState] = useState(languages.english[1]);
  const [contactState, setContactState] = useState(languages.english[2]);
  const [titleState, setTitleState] = useState(languages.english[3]);

  // Function for changing the language of text on the page
  const changeLanguage = (event) => {
    // Prevent thte page from reloading on click
    event.preventDefault();
    // Define which language will be used
    let language =
      homeState === languages.english[0]
        ? languages.spanish
        : languages.english;
    // Set the states to the new language
    setHomeState(language[0]);
    setAboutState(language[1]);
    setContactState(language[2]);
    setTitleState(language[3]);
  };

  return (
    <div className="App">
      <Header
        home={homeState}
        about={aboutState}
        contact={contactState}
        title={titleState}
        languageSetter={changeLanguage}
      />
    </div>
  );
}

export default App;
