import ArtistHome from "../components/ArtistHome"
import BlogHome from "../components/BlogHome"
import CarouselHero from "../components/CarouselHero"
import EventHome from "../components/EventHome"

const HomePage = () => {
  return (
    <>
      <CarouselHero />
      <ArtistHome />
      <EventHome />
      <BlogHome />
    </>
  )
}

export default HomePage
