import React from "react";
import cl from "./app.module.scss";
import "normalize.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Social from "../Social/Social";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Skills from "../Skills/Skills";
import ProjectsList from "../ProjectsList/ProjectsList";
import Container from "../Container/Container";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className={cl.app}>
      <Loader />
      <Container>
        <Header />
        <WelcomeSection />
      </Container>
      <Skills />
      <Container>
        <ProjectsList />
        <Contact />
      </Container>
      <Social />
    </div>
  );
}

export default App;
