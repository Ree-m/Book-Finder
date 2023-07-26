import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/bookDetails.module.css";
import { Link } from "react-router-dom";

function BookDetailsPage() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const data = await response.json();
        setBook(data);
        setLoading(false);
        console.log("book", book);
      } catch (error) {
        console.log(error);
      }
    };

  

    fetchBook();
  }, [bookId]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // if(loading){
  //     <Loading/>
  // }
  return (
    <>
      {book.volumeInfo && (
        <div className={styles.bookDetails}>
          <div className={styles.details1}>
            <div className={styles.details1Top}>
            <h2>{book.volumeInfo.title}</h2>
            <div className={styles.imageContainer}>
              <img
                className={styles.bookCover}
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
            </div>
            </div>
         

            <h3>
              {book.volumeInfo.authors
                ? `Authors: ${book.volumeInfo.authors}`
                : `Author:n/a`} 
            </h3>
            <h3>
              {book.volumeInfo.publishedDate
                ? `Published Date: ${book.volumeInfo.publishedDate}`
                : `Published-date:n/a`}
            </h3>
            <h3>
              {book.volumeInfo.publisher
                ? `Publisher: ${book.volumeInfo.publisher}`
                : `Publisher:n/a`}
            </h3>

            <h3>
              {book.volumeInfo.pageCount
                ? `Number of pages: ${book.volumeInfo.pageCount}`
                : `Publisher:n/a`}
            </h3>
          </div>

          <div className={styles.details2}>
            <h2>Book Description</h2>
            <p>
              {book.volumeInfo.description
                ? book.volumeInfo.description.replace(/<p>|<\/p>|<br>|<b>|<\/b>/g,"")
                : "Description not available."}
            </p>
            <div className={styles.btns}>
                <button onClick={()=>openInNewTab(book.accessInfo.webReaderLink)}>Read Sample</button>
                <button onClick={()=>openInNewTab(book.saleInfo.buyLink )}>Buy Book</button>

            </div>
          </div>





        </div>
      )}
    </>
  );
}

export default BookDetailsPage;
