import cl from "./project.module.scss";

interface ProjectProps {
  name: string;
  githubLink: string;
  liveLink: string;
  image: string;
  loadedImage: () => void;
}

const Project: React.FC<ProjectProps> = ({
  name,
  githubLink,
  liveLink,
  image,
  loadedImage,
}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <a href={githubLink} className={cl.github} target="_blank">
          Github
          <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143">
            <path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z" />
          </svg>
        </a>
        <a href={liveLink} className={cl.eye__wrapper} target="_blank">
          <svg className={cl.textcircle} viewBox="0 0 500 500">
            <defs>
              <path
                id="textcircle"
                d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              />
            </defs>
            <text>
              <textPath
                xlinkHref="#textcircle"
                aria-label=".Click to see the live version."
                textLength="900"
              >
                .Click eye to see the live version.
              </textPath>
            </text>
          </svg>
          <svg
            className={cl.eye}
            aria-hidden="true"
            viewBox="0 0 70 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={cl.eye__outer}
              d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
            />
            <path
              className={cl.eye__lashesUp}
              d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
            />
            <path
              className={cl.eye__lashesDown}
              d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
            />
            <circle className={cl.eye__iris} cx="35" cy="35.31" r="5.221" />
            <circle className={cl.eye__inner} cx="35" cy="35.31" r="10.041" />
          </svg>
        </a>
      </div>
      <div className={cl.preview}>
        <div className={cl.name}>{name}</div>
        <img
          className={cl.project__image}
          src={image}
          alt={name}
          onLoad={() => loadedImage()}
        />
      </div>
    </div>
  );
};

export default Project;
