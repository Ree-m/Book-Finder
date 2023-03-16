import './App.css'

import BookDetailsPage from './BookDetailsPage'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<HomePage/> } />

          <Route path="/bookDetails/:bookId" element={<BookDetailsPage />} />

        </Routes>

      


      </div>
    </Router>
  )
}

export default App
