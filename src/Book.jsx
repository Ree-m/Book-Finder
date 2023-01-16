const Book = ({book}) => {

  return (
    <div  className='book'>
        <img src="`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`" alt="Book cover" />
        <h1>{book.volumeInfo.title}</h1>
         <h3>{ book.volumeInfo.authors ? `Author:${book.volumeInfo.authors}` :`Author:unknown`}</h3>
         <h3>{book.volumeInfo.publisher ? `Publisher:${book.volumeInfo.publisher}` : `Publisher:unknown`}</h3>
         <h3>{book.volumeInfo.publishedDate ? `Published-date:${book.volumeInfo.publishedDate}` :`Published-date:unknown`}</h3>

        
    </div>

  )
}

export default Book
