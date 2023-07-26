import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import styles from "./styles/hero.module.css"
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h2>Find the <span className={styles.blue}>books</span> you are looking for anywhere</h2>
        <p> 
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </p>
        <button>
        <Link to={`/search`}>
            Search now
            <BsArrowRight/>
            </Link>
        </button>

      </div>

      <div className={styles.imgContainer}>
        <img src="src/assets/images/main.svg" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
