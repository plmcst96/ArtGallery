import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleArtist } from "../redux/actions/artist"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import ArtistDetaillHist from "../components/ArtistDetailHist"

const ArtistDetail = () => {
  const singleArtist = useSelector((state) => state.artist.singleArtist)
  const { uuid } = useParams()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  console.log()

  useEffect(() => {
    if (!singleArtist) {
      dispatch(getSingleArtist(uuid, token))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, singleArtist, uuid, token])

  if (!singleArtist) {
    return (
      <Button variant="text" loading={true}>
        Loading
      </Button>
    )
  }

  return (
    <>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={{ backgroundImage: `url(${singleArtist.imageArtist})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14  md:px-12 w-full">
          <Typography variant="h2" className="mb-20 text-white uppercase">
            {singleArtist.name + " " + singleArtist.surname}
          </Typography>
          <div className="flex justify-center items-center gap-4 md:gap-20 relative h-10  ">
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
            >
              History
            </Button>
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
            >
              Gallery
            </Button>
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
            >
              Exhibition
            </Button>
          </div>
        </CardBody>
      </Card>
      <ArtistDetaillHist />
    </>
  )
}
export default ArtistDetail
