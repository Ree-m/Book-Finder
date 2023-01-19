import Book from "./Book"
const Books = ({ books ,input}) => {
  
  return (
    <div className="books">
      {  books.map((book) => (
           <Book key={book.id} book={book}  />

      ))}
    </div>
  )
}

export default Books
