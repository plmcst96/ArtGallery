import {
  Button,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react"
import frida from "../assets/frida2.png"
import img2 from "../assets/img1.png"
import testa from "../assets/immagine marina fade1751-31ad-4bb1-b68a-89e54920270b.png"
import { Link } from "react-router-dom"

const CarouselHero = () => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      className="carus"
      prevArrow={() => <IconButton color="transparent"></IconButton>}
      nextArrow={() => <IconButton color="transparent"></IconButton>}
    >
      <div className="h-full w-full relative">
        <img src={frida} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-left ml-10">
          <div className="w-3/4  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xlm testo"
            >
              FRIDA KAHLO EXHIBITION
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
              NOVEMBER 26 - FEBRUARY 20
            </Typography>
            <div className="flex justify-start gap-2 mt-20">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone mr-6"
              >
                <Link to="/tickets">Buy Ticket</Link>
              </Button>
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone"
              >
                <Link to="/exhibitions">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full relative">
        <img src={img2} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-left ml-10">
          <div className="w-3/4  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xlm testo"
            >
              WOMENS ART EXHIBITION
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
              JENUARY 02 - APRIL 19
            </Typography>
            <div className="flex justify-start gap-2 mt-20">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone mr-6"
              >
                <Link to="/tickets">Buy Ticket</Link>
              </Button>
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone"
              >
                <Link to="/exhibitions">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full relative">
        <img src={testa} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-left ml-10">
          <div className="w-3/4  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xlm testo"
            >
              MARINA ABRAMOVICH EXHIBITION
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
              SEPTEMBER 16 - DECEMBER 31
            </Typography>
            <div className="flex justify-start gap-2 mt-20">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone mr-6"
              >
                <Link to="/tickets">Buy Ticket</Link>
              </Button>
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="rounded-full bottone"
              >
                <Link to="/exhibitions">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
export default CarouselHero
