import { useState, useEffect } from 'react'
import './App.css'
import Books from './Books'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [input, setInput] = useState("")
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  const fetchData = async (e) => {
    console.log("this is e of fetchdata", e)
    setIsLoading(true)

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)

    const data = await response.json()

    console.log(data, data.items[0], input)
    setBooks(data.items)
    setIsLoading(true)

    setIsLoading(false)
  }

  useEffect(() => {

    fetchData();
  }, [])



  return (
    <Router>
      <div className="app">

        <div className="hero">

          <div className="input">
            <h1 className="logo">Book finder</h1>
            <input className="searchBar" type="text" placeholder='Enter book name,author,date,...' onChange={(e) => setInput(e.target.value)} />
            <input className="btn" type="submit" value="Search" onClick={fetchData} />
          </div>

          <div className="image">
            <img src="src/assets/images/bookFinder-image-home.svg" alt="" />
          </div>

        </div>

        <div>
          {isLoading && input && <p>Loading...</p>}
          {books.length > 0 && <Books books={books} />}
        </div>

        <Footer />


      </div>
    </Router>
  )
}

export default App
