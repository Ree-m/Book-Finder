import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = ({ onClick }) => {
  return (
    <div className="footer">
      <h1>Book Finder</h1>
      <p> Copyright © 2023 Reem</p>
      
      <div>
        <BsGithub />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Footer;
