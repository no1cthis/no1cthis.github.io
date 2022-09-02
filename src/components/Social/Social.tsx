import cl from "./social.module.scss";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  return (
    <ul className={cl.wrapper}>
      <li>
        <i className={`fa-brands fa-linkedin ${cl.social}`}></i>
      </li>
      <li>
        <i
          className={`fa-brands fa-github ${cl.socialCircle} ${cl.github}`}
        ></i>
      </li>
      <li>
        <i className={`fa-brands fa-telegram ${cl.socialCircle}`}></i>
      </li>
    </ul>
  );
};

export default Social;
