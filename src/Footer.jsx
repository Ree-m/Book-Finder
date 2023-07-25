import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./styles/footer.module.css"
const Footer = ({ onClick }) => {
  return (
    <div className={styles.footer}>
      <Link to={`/`}><h1 className={styles.logo}>Book Finder</h1></Link>
      <p> Copyright © 2023 Reem</p>
      
      <div className={styles.footerLinks}>
        <Link to={`/`}><BsGithub /></Link>
        <Link to={`/`}><BsLinkedin/></Link>

      </div>
    </div>
  );
};

export default Footer;
