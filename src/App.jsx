import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Footer from "./pages/Footer"
import HomePage from "./pages/HomePage"
import NewsLetter from "./components/NewsLetter"
import ArtistList from "./pages/ArtistList"
import ArtistDetail from "./pages/ArtistDetail"
import EventsListAll from "./pages/EventListAll"
import EventDetail from "./components/EventDetail"
import BlogList from "./pages/BlogList"
import BlogDetail from "./components/BlogDetail"
import Ticket from "./pages/Ticket"
import Checkout from "./pages/Checkout"
import LoginCurator from "./pages/LoginCurator"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/curator" element={<LoginCurator />} />
          <Route path="/artist" element={<ArtistList />} />
          <Route path="/artist/detail/:uuid" element={<ArtistDetail />} />
          <Route path="/events" element={<EventsListAll />} />
          <Route path="/event/detail/:uuid" element={<EventDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/detail/:uuid" element={<BlogDetail />} />
          <Route path="/tickets/:uuid" element={<Ticket />} />
          <Route path="/checkout/:uuid" element={<Checkout />} />
        </Routes>
      </main>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
