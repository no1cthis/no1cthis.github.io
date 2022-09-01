import cl from "./social.module.scss";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  return (
    <div className={cl.wrapper}>
      <ul>
        <li>
          <i className={`fa-brands fa-linkedin ${cl.social}`}></i>
        </li>
        <li>
          <i className={`fa-brands fa-github ${cl.socialCircle} ${cl.github}`}></i>
        </li>
        <li>
          <i className={`fa-brands fa-telegram ${cl.socialCircle}`}></i>
        </li>
      </ul>
    </div>
  );
};

export default Social;
