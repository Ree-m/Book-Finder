import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
const Hero = () => {
  return (
    <div>
      <div>
        <h2>Find the books you are looking for anywhere</h2>
        <p>
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </p>
        <Link to={`/search`}>
            Search now
            <BsArrowRight/>
            </Link>
      </div>

      <div>
        <img src="src/assets/images/main.svg" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
