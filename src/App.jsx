import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Footer from "./pages/Footer"
import HomePage from "./pages/HomePage"
import NewsLetter from "./components/NewsLetter"
import ArtistList from "./pages/ArtistList"
import ArtistDetail from "./pages/ArtistDetail"
import LoginForm from "./components/LoginForm"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/curator" element={<LoginForm />} />
          <Route path="/artist" element={<ArtistList />} />
          <Route path="/artist/detail/:uuid" element={<ArtistDetail />} />
        </Routes>
      </main>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
