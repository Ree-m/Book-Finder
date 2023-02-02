import { useState, useEffect } from 'react'
import './App.css'
import Books from './Books'
import Book from './Book'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import image from '/home/remi/input-search-react-test/src/assets/images/bookFinder-image-home.svg'


function App() {
  const [input, setInput] = useState("")
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  const fetchData = async (e) => {
    setIsLoading(true)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    const data = await response.json()
    // console.log(data, data.items[0], input)
    setBooks(data.items)
    setIsLoading(false)
  }

  useEffect(() => {

    fetchData();
  }, [])


  // footer redirect
  const handleClick=()=>{
    window.open("https://github.com/Ree-m", '_blank')
  }


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={
            <>
              <div className="hero">

                <div className="input">
                  <h1 className="logo">Book finder</h1>
                  <input className="searchBar" type="text" placeholder='Enter book name,author,date,...' onChange={(e) => setInput(e.target.value)} />
                  <input className="btn" type="submit" value="Search" onClick={fetchData} />
                </div>

                <div className="image">
                  <img src={image} alt="" />
                </div>

              </div>

              <div>
                {isLoading && input && <p>Loading...</p>}
                {books && <Books books={books} />}
              </div>

              <Footer onClick={handleClick} />

            </>
          } />
        </Routes>

      


      </div>
    </Router>
  )
}

export default App
