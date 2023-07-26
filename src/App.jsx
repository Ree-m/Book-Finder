import "./App.css";

import BookDetailsPage from "./BookDetailsPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="/bookDetails/:bookId"
              element={<BookDetailsPage />}
              render={(props) => (
                <BookDetails {...props} bookId={props.match.params.id} />
              )}
            />

          </Route>

          <Route path="/search" element={<Layout />}>
            <Route index element={<Search />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
