import {Link} from 'react-router-dom'
import styles from "./styles/book.module.css"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Book = ({ book }) => {
  console.log("book data",book, book.volumeInfo.imageLinks?.thumbnail)

  return (
    <div className={styles.book}>

        <div className={styles.imgContainer} >
            <img  src={book.volumeInfo.imageLinks?.thumbnail} alt={`Cover Image of ${book.volumeInfo.title}`} className={styles.bookCover}/>
            
          
        </div>

        <div className={styles.bookInfo}>
          <h1>{book.volumeInfo.title}</h1>
          <h3>{book.volumeInfo.authors ? `Authors: ${book.volumeInfo.authors}` : `Author:n/a`}</h3>
          <h3>{book.volumeInfo.publishedDate ? `Published Date: ${book.volumeInfo.publishedDate}` : `Published-date:n/a`}</h3>
          <h3>{book.volumeInfo.publisher ? `Publisher: ${book.volumeInfo.publisher}` : `Publisher:n/a`}</h3>
          <button className={styles.btn}><Link to={`/bookDetails/${book.id}`}>More
          <MdOutlineKeyboardArrowRight/>
          </Link></button>
      </div>

    </div>

  )
}

export default Book
