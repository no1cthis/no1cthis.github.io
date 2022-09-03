import cl from "./social.module.scss";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  return (
    <ul className={cl.wrapper}>
      <li>
        <a href="https://www.linkedin.com/in/no1cthis/" target="_blank">
          <i className={`fa-brands fa-linkedin ${cl.social}`}></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/no1cthis" target="_blank">
          <i
            className={`fa-brands fa-github ${cl.socialCircle} ${cl.github}`}
          ></i>
        </a>
      </li>
      <li>
        <a href="https://t.me/belzobub" target="_blank">
          <i className={`fa-brands fa-telegram ${cl.socialCircle}`}></i>
        </a>
      </li>
    </ul>
  );
};

export default Social;
