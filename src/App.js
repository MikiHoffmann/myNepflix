import "./assets/scss/main.scss"
import { LangProvider } from "./redux/language/languageContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./assets/ScrollToTop"
import LandingPage from "./pages/LandingPage"
import SignInPage from "./pages/SignInPage"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import MyListPage from "./pages/MyListPage"

function App() {
  return (
    <>
      <LangProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/signin" element={<SignInPage />} />
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/movies" element={<MoviesPage />} />
              <Route exact path="/series" element={<SeriesPage />} />
              <Route exact path="/mylist" element={<MyListPage />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </LangProvider>
    </>
  )
}

export default App