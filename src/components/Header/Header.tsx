import cl from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={cl.header}>
      <ul className={cl.menu}>
        <li>
          <a className={cl.link} data-text={"Home"} tabIndex={0}>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className={cl.link} data-text={"Projects"} tabIndex={0}>
            <span>Projects</span>
          </a>
        </li>
      </ul>
      <div className={`${cl.contact}`} data-text={"Contact me"} tabIndex={0}>
        <span>Contact</span>
      </div>
    </header>
  );
};

export default Header;
