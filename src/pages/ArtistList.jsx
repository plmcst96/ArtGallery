import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAlArtist, getSingleArtist } from "../redux/actions/artist"

import BlogHome from "../components/BlogHome"
import { useNavigate } from "react-router-dom"

const ArtistList = () => {
  const artistData = useSelector((state) => state.artist.artists)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAlArtist(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div
        id="art"
        className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-x-5 gap-y-10 mx-5 my-20"
      >
        {artistData.map((artist) => (
          <Card
            shadow={false}
            className="relative grid h-[30rem] w-full max-w-[30rem] items-end justify-center overflow-hidden text-center"
            key={artist.uuid}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              style={{ backgroundImage: `url(${artist.imageArtist})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                {artist.quote}
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                {artist.name + " " + artist.surname}
              </Typography>

              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white cursor-pointer"
                src={artist.imageArtist}
                artistId={artist.uuid}
                onClick={() => {
                  dispatch(getSingleArtist(artist.uuid, token))
                  navigate("/artist/detail/" + artist.uuid)
                }}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <BlogHome />
    </>
  )
}
export default ArtistList
