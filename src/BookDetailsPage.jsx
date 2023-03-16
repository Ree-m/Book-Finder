// const BookDetailsPage = ({books}) => {
//     return ( 
//         <div>
//          {bookId}
//         </div>
//      );
// }

// export default BookDetailsPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetailsPage() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const fetchBook = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
                const data = await response.json();
                setBook(data);
                setIsLoading(false)
                console.log("book", data.volumeInfo)
            } catch (error) {
                console.log(error);
            }
        };

        fetchBook();
    }, [bookId]);

    return (
        <div className="bookDetails">
            {isLoading && <p>Loading...</p>}

            {book.volumeInfo && (

                <>
                    <div className="image-book" >
                        {book.volumeInfo.imageLinks !== undefined &&
                            <img className="bookCover" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        }
                    </div>
                    <div className="details-book">
                        <h1>{book.volumeInfo.title}</h1>
                        <h3>{book.volumeInfo.authors ? `Authors: ${book.volumeInfo.authors}` : `Author:n/a`}</h3>
                        <h3>{book.volumeInfo.publishedDate ? `Published Date: ${book.volumeInfo.publishedDate}` : `Published-date:n/a`}</h3>
                        <h3>{book.volumeInfo.publisher ? `Publisher: ${book.volumeInfo.publisher}` : `Publisher:n/a`}</h3>
                        <p>{book.volumeInfo.description ? book.volumeInfo.description : 'Description not available.'}</p>
                    </div>

                </>

            )}


        </div>
    );
}

export default BookDetailsPage;
