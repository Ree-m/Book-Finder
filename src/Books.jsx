import Book from "./Book"
import styles from "./styles/books.module.css"
const Books = ({ books ,input}) => {
  
  return (
    <div className={styles.books}>
      { books && books.map((book) => (
           <Book key={book.id} book={book}  />

      ))}
    </div>
  )
}

export default Books
