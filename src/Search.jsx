import styles from "./styles/search.module.css";
import { useState } from "react";
import Books from "./Books";
const Search = () => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}`
    );
    const data = await response.json();
    console.log(data, data.items);
    setBooks(data.items);
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }; 
  return (
    <div className={styles.search}>
      <p>
        You don't need to know the name of the book, if you know the name of the
        author or publisher, just type, search and find
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Type book name, author,..."/>
        <input type="submit" value="Search" className={styles.submitBtn}  />
      </form>

      {isLoading ? ( 
        <div className={styles.imgContainer}>
          <img src="/assets/images/searching.svg" alt="" />
        </div>
       
      ) : (
        <div>
          {books && books.length!==0 ? (
                        <Books books={books} />

           
          ) : (
            <div className={styles.imgContainer}>
            <img src="/assets/images/search.svg" alt="" />
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
