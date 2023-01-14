import { useState } from 'react'
import './App.css'
import Data from "../mock-data.json"

function App() {
  // const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <div className="App">
      <form className="search-bar" onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" placeholder='Enter book name,author,date,...' onChange={(e)=> setInput(e.target.value)} />
        </div>
        <input value="Submit" type="submit"  />
      </form>

      {
        Data.filter((book) => {
          if (input == "") {
            // if input is empty
            return book
          } else if (book.title.toLowerCase().includes(input.toLowerCase())) {
            return book
          }
        })
          .map((book) => (
            <div className="box" key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          ))
      }
    </div>
  )
}

export default App
