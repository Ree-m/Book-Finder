import {Link} from 'react-router-dom'
const Book = ({ book }) => {

  return (
    <div className="book">
      <div className="flex">

        <div >
          {book.volumeInfo.imageLinks !== undefined &&
            <img className="bookCover" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          }
        </div>

        <div className="bookDetails">
          <h1>{book.volumeInfo.title}</h1>
          <h3>{book.volumeInfo.authors ? `Authors:${book.volumeInfo.authors}` : `Author:n/a`}</h3>
          <h3>{book.volumeInfo.publishedDate ? `Published-date:${book.volumeInfo.publishedDate}` : `Published-date:n/a`}</h3>
          <h3>{book.volumeInfo.publisher ? `Publisher:${book.volumeInfo.publisher}` : `Publisher:n/a`}</h3>
          <button className="btn-2"><Link to="">See More</Link></button>

        </div>

      </div>

    </div>

  )
}

export default Book
