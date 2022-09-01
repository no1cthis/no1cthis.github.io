import React from "react";
import cl from "./app.module.scss";
import "normalize.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

function App() {
  // return <Loader/>;
  return (
    <div className={cl}>
      <Header />
      <Loader />
    </div>
  );
}

export default App;
