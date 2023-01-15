import { useState } from 'react'
import './App.css'
import Data from "../mock-data.json"
import Book from './Book'
import Books from './Books'

function App() {
  const [input, setInput] = useState("")
  const [books,setBooks]=useState(Data)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submit",input)
    const filtered= Data.filter((book)=>{
      return book.title.toLowerCase().includes(input.toLowerCase())
    })
    setInput("")
    setBooks(filtered)
   
  }
  

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" placeholder='Enter book name,author,date,...' onChange={(e)=> setInput(e.target.value)} />
        </div>
        <input value="Submit" type="submit"  />
      </form>

      <Books books={books} /> 
    </div>
  )
}

export default App
