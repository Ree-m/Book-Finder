import Book from "./Book"
const Books = ({ books ,input}) => {
// const filterBooks=()=>{
    
// }
  return (
    <>
      { books.map((book) => (
        
          <Book key={book.id} book={book}  />
      
      ))}
    </>
  )
}

export default Books
