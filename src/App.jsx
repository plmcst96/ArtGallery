import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Footer from "./pages/Footer"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
