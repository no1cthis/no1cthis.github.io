import cl from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={cl.header}>
      <ul className={cl.menu}>
        <li>
          <a className={cl.link} data-text={"Home"}>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className={cl.link} data-text={"Projects"}>
            <span>Projects</span>
          </a>
        </li>
      </ul>
      <div className={`${cl.contact} ${cl.link}`} data-text={"Contact me"}>
        <span>Contact</span>
      </div>
    </header>
  );
};

export default Header;
