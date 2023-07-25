import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>Book Finder</h1>
      <nav className={StyleSheet.navLinks}>
        <Link to={`/`}>About</Link>
        <Link to={`/`}>Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
