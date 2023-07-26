import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={styles.header}>
      <Link to={`/`}>
        <h1 className={styles.logo}>Book Finder</h1>
      </Link>
      <nav className={styles.navLinks}>
        <button onClick={() => openInNewTab("https://github.com/Ree-m/book-finder/blob/main/README.md")}>About</button>
        <button onClick={() => openInNewTab("https://www.linkedin.com/in/reembsrat/")}>Contact</button>
      </nav>
      <div className={styles.menu}>
        <button className={styles.menuBtn} onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {toggleMenu ? (
          <div className={styles.menuItems}>
            <button onClick={() => openInNewTab("https://github.com/Ree-m/book-finder/blob/main/README.md")}>About</button>
            <button onClick={() => openInNewTab("https://www.linkedin.com/in/reembsrat/")}>Contact</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
