import { useEffect, useRef, useState } from "react";
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
  const [loadCount, setLoadCount] = useState(0);
  const app = useRef<HTMLDivElement>(null);


  const loadedImage = () => {
    setLoadCount((loadCount) => loadCount + 1);
  };

  return (
    <>
      <Loader
        loadCount={loadCount}
        allImageNumber={4}
        loadedImage={loadedImage}
        app={app}
      />
      <div className={cl.app} ref={app}>
        <Container>
          <Header />
          <WelcomeSection />
        </Container>
        <Skills />
        <Container>
          <ProjectsList loadedImage={loadedImage} />
          <Contact />
        </Container>
        <Social />
      </div>
    </>
  );
}

export default App;
