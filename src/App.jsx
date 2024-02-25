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
import ExhibitionList from "./pages/ExhibitionList"
import ExhibitionDetail from "./components/ExhibitionDetail"
import FavouriteList from "./components/FavouriteList"
import AdminPage from "./pages/AdminPage"
import AdminArtist from "./pages/AdminArtist"
import { AdminBlog } from "./components/AdminBlog"
import { Profile } from "./pages/Profile"
import { CuratorRequest } from "./components/CuratorRequest"

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
          <Route path="/tickets/event/:uuid" element={<Ticket />} />
          <Route path="/checkout/:uuid" element={<Checkout />} />
          <Route path="/exhibitions" element={<ExhibitionList />} />
          <Route path="/favourite" element={<FavouriteList />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/artistWork" element={<AdminArtist />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/curator" element={<CuratorRequest />} />
          <Route
            path="/exhibition/detail/:uuid"
            element={<ExhibitionDetail />}
          />
        </Routes>
      </main>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
