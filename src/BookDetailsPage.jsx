import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./styles/bookDetails.module.css"

function BookDetailsPage() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
                const data = await response.json();
                setBook(data);
                setLoading(false)
                console.log("book", book)
            } catch (error) {
                console.log(error);
            }
        };

        fetchBook();
    }, [bookId]);

// if(loading){
//     <Loading/>
// }
    return (
<>
            {book.volumeInfo && (

                <div className={styles.bookDetails}>
                    <div className={styles.imageContainer} >
                            <img className={styles.bookCover} src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                        
                    </div>
                    <div className={styles.detailInfo}>
                        <h1>{book.volumeInfo.title}</h1>
                        <h3>{book.volumeInfo.authors ? `Authors: ${book.volumeInfo.authors}` : `Author:n/a`}</h3>
                        <h3>{book.volumeInfo.publishedDate ? `Published Date: ${book.volumeInfo.publishedDate}` : `Published-date:n/a`}</h3>
                        <h3>{book.volumeInfo.publisher ? `Publisher: ${book.volumeInfo.publisher}` : `Publisher:n/a`}</h3>
                        <p>{book.volumeInfo.description ? book.volumeInfo.description : 'Description not available.'}</p>
                    </div>

                </div>

            )}
            </>


    );
}

export default BookDetailsPage;
