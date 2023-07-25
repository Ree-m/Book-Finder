import './App.css'

import BookDetailsPage from './BookDetailsPage'
import HomePage from './HomePage'
import Layout from './Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route
        path={"/"}
        element={
          <Layout/>
        }
      >
          <Route path="/" exact element={<HomePage/> } />

          <Route path="/bookDetails/:bookId"
                 element={<BookDetailsPage />}
                 render={(props) => <BookDetails {...props} bookId={props.match.params.id} />}
                 />

                 </Route>

        </Routes>

      


      </div>
    </Router>
  )
}

export default App
