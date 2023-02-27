import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cl from "./loader.module.scss";

interface LoaderProps {
  loadCount: number;
  allImageNumber: number;
  loadedImage: () => void;
  app: React.RefObject<HTMLDivElement>;
}

const Loader: React.FC<LoaderProps> = ({
  loadCount,
  allImageNumber,
  loadedImage,
  app,
}) => {
  const text = useRef<(HTMLDivElement | null)[]>([]);
  const loader = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLImageElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(0);
  const [finished, setFinished] = useState(false);
  const counterRef = useRef(0);
  const line = useRef<HTMLDivElement>(null);
  const idAnim = useRef(0);

  useEffect(() => {
    if (!finished) return;
    const tl = gsap.timeline({ repeat: 2 });
    const tlBackground = gsap.timeline();
    tl.to(text.current, {
      opacity: 1,
      duration: 0.3,
    })
      .to(text.current, { opacity: 0, duration: 0.3 })
      .then(() => {
        tlBackground.play();
      });

    tlBackground
      .pause()
      .to(line.current, { opacity: 0, duration: 0.4 })
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
        duration: 2,
        delay: -1.5,
      })
      .then(() => {
        if (wrapper.current) wrapper.current.style.zIndex = "-100";
        gsap.to(app.current, { opacity: 1, duration: 1 });
      });
  }, [finished]);

  useEffect(() => {
    cancelAnimationFrame(idAnim.current);
    changeCounter();
  }, [loadCount]);

  const changeCounter = () => {
    if (
      counterRef.current <= (loadCount / allImageNumber) * 100 &&
      idAnim.current % 1 === 0
    ) {
      if (line.current && counterRef.current > 5)
        line.current.style.width = `${counterRef.current}%`;
      setCounter(counterRef.current++);
    }
    idAnim.current = requestAnimationFrame(changeCounter);
    if (counterRef.current >= 101 && line.current) {
      setFinished(true);
      cancelAnimationFrame(idAnim.current);
    }
  };

  return (
    <div ref={wrapper} className={cl.wrapper}>
      <div ref={loader} className={cl.loader}>
        <div ref={(el) => (text.current[0] = el)} className={cl.loader__text}>
          Loading
        </div>
        <div ref={line} className={cl.line}></div>
        <div
          ref={(el) => (text.current[1] = el)}
          className={cl.loader__counter}
        >
          {counter}%
        </div>
      </div>
      <img
        ref={background}
        className={cl.background}
        src="https://i.pinimg.com/originals/7b/99/3c/7b993c5dcdb3299da705f32efd87217a.gif"
        onLoad={() => loadedImage()}
      />
    </div>
  );
};

export default Loader;
