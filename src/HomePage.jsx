import { useState } from "react";
import image from "/src/assets/images/bookFinder-image-home.svg";
import Books from "./Books";
import Book from "./Book";
import Footer from "./Footer";
import styles from "./styles/homePage.module.css";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}`
    );
    const data = await response.json();
    console.log(data, data.items)
    setBooks(data.items);
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  // footer redirect
  const handleClick = () => {
    window.open("https://github.com/Ree-m", "_blank");
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.logo}>Book finder</h1>

          <input
            className={styles.searchBar}
            type="text"
            placeholder="Enter book name,author,date,..."
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Submit" className={styles.btn} />
        </form>

      {/* <div className={styles.imageContainer}> */}
        <img src={image} alt="Home Page image" className={styles.image}/>
      {/* </div> */}

      </div>

      <div className={styles.books}>
        {isLoading && input && <p>Loading...</p>}
        {books && <Books books={books} />}
      </div>

      {/* <Footer onClick={handleClick} /> */}
    </div>
  );
};

export default HomePage;
