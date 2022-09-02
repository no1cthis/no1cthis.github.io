import React from "react";
import cl from "./app.module.scss";
import "normalize.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Social from "../Social/Social";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Skills from "../Skills/Skills";

function App() {
  return (
    <div className={cl.app}>
      <Header />
      <Loader />
      <WelcomeSection />
      <Skills />
      <Social />
    </div>
  );
}

export default App;
