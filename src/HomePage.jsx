import { useState } from "react";
import Books from "./Books";
import Book from "./Book";
import Footer from "./Footer";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
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
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
     

    </div>
  );
};

export default HomePage;
