import { useEffect, useState } from "react";
import cl from "./welcomeSection.module.scss";

interface WelcomeSectionProps {}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const headerHeight = 100;

  useEffect(() => {
    setHeight(window.innerHeight - headerHeight);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight - headerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight - headerHeight);
      });
    };
  }, []);
  return (
    <section className={cl.welcome} style={{ height: `${height}px` }}>
      <div className={cl.text}>
        Hi, my name is <br />
        <span>Mykyta Krukovskyi </span>
        <br /> I'm a front-end developer and <br />
        third-year computer science
        {window.innerWidth < 1200 ? <br /> : null} student{" "}
        {window.innerWidth > 1200 ? <br /> : null} from Ukraine
      </div>

      <div className={cl.scroller__wrapper}>
        <div className={cl.scroller}>
          <div className={cl.scroller__point}></div>
        </div>
        <div className={cl.scroller__arrows}>
          <div className={cl.scroller__arrow}></div>
          <div className={cl.scroller__arrow}></div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
