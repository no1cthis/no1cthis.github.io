import React from "react";
import cl from "./app.module.scss";
import "normalize.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Social from "../Social/Social";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

function App() {
  // return <Loader/>;
  return (
    <div className={cl.app}>
      <Header />
      <Loader />
      <WelcomeSection />
      <Social />
    </div>
  );
}

export default App;
