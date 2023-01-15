const Book = ({book}) => {
  return (
    <div className='book'>
        <h1>{book.title}</h1>
         <h3>{`Author:${book.author}`}</h3>
        
    </div>

  )
}

export default Book
