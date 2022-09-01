import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import cl from "./loader.module.scss";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const text = useRef<(HTMLDivElement | null)[]>([]);
  const loader = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLImageElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const tlBackground = gsap.timeline();
    tl.to(text.current, { opacity: 0, duration: 1 }).to(text.current, {
      opacity: 1,
      duration: 1,
    });

    tlBackground
      .to(loader.current, {
        width: "20%",
        height: "20%",
        borderRadius: "50%",
        borderColor: "red",
        opacity: 0,
        duration: 3,
        zIndex: -100,
      })
      .to(background.current, {
        opacity: 0.2,
        duration: 3,
        delay: -1.5,
      })
      .then(() => {
        if (wrapper.current) wrapper.current.style.zIndex = "-100";
      });
  }, []);

  return (
    <div ref={wrapper} className={cl.wrapper}>
      <div ref={loader} className={cl.loader}>
        <div ref={(el) => (text.current[0] = el)} className={cl.loader__text}>
          Loading
        </div>
        <div
          ref={(el) => (text.current[1] = el)}
          className={cl.loader__counter}
        >
          0%
        </div>
      </div>
      <img
        ref={background}
        className={cl.background}
        src="https://i.pinimg.com/originals/7b/99/3c/7b993c5dcdb3299da705f32efd87217a.gif"
        alt=""
      />
    </div>
  );
};

export default Loader;
