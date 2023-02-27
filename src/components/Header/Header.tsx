import cl from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={cl.header}>
      <ul className={cl.menu}>
        <li>
          <a
            className={cl.link}
            href={"#projects"}
            data-text={"Projects"}
            tabIndex={0}
          >
            <span>Projects</span>
          </a>
        </li>
      </ul>
      <a
        className={`${cl.contact}`}
        href={"#contact"}
        data-text={"Contact me"}
        tabIndex={0}
      >
        <span>Contact</span>
      </a>
    </header>
  );
};

export default Header;
