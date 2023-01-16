import { useState, useEffect } from 'react'
import './App.css'
// import Data from "../mock-data.json"
import Book from './Book'
import Books from './Books'
import axios from 'axios'

function App() {
  const [showBooks, setShowBooks] = useState(false)
  const [input, setInput] = useState("")
  const [books, setBooks] = useState([])


  const fetchData = async (e) => {
    const input=e.target.value
    console.log(e)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    const data = await response.json()
    console.log(data,data.items[0],"this is e",e)
    setBooks(data.items)
}

  useEffect(() => {
   
    fetchData();
}, [])

  // const onSubmit = async (e) => {
    
  //   e.preventDefault()
  //   console.log("submit", input)

  //   const filtered = books.filter((book) => {
  //     if (book.title.toLowerCase().includes(input.toLowerCase()) || book.author.toLowerCase().includes(input.toLowerCase()) || book.publishor.toLowerCase().includes(input.toLowerCase()) || book['published-date'].toLowerCase().includes(input.toLowerCase())) {
  //       return book
  //     }
  //   })
  //   setInput("")
  //   setBooks(filtered)
  //   setShowBooks(true)

  // }

  return (
    <div className="App">
      <form >
        <div className="form-control">
          <input type="text" placeholder='Enter book name,author,date,...' onChange={fetchData} />
        </div>
        <input value="Submit" type="submit" />
      </form>

      {books.length > 0 && <Books books={books} /> }
    </div>
  )
}

export default App
