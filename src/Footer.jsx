import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./styles/footer.module.css"
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={styles.footer}>
      <Link to={`/`}><h1 className={styles.logo}>Book Finder</h1></Link>
      <p> Copyright © 2023 Reem</p>
      
      <div className={styles.footerLinks}>
        <button onClick={()=>openInNewTab("https://github.com/Ree-m")}><BsGithub /></button>
        <button onClick={()=>openInNewTab("https://www.linkedin.com/in/reembsrat/")}><BsLinkedin/></button>

      </div>
    </div>
  );
};

export default Footer;
