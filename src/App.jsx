import { useState } from 'react'
import './App.css'
import Data from "../mock-data.json"

function App() {
  // const [count, setCount] = useState(0)
  const [input,setInput]=useState("")

  return (
    <div className="App">
     <input placeholder='Enter book name,author,date,...' onChange={(e)=> setInput(e.target.value)} />

     {
      Data.filter((book)=>{
        if(input==""){
          // if input is empty
          return book
        }else if(book.title.toLowerCase().includes(input.toLowerCase())){
          return book
        }
      })
      .map((book)=>(
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
