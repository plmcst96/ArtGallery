import { useEffect } from "react"
import BlogHome from "../components/BlogHome"
import { getExhibition } from "../redux/actions/exhibition"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import ArtistHome from "../components/ArtistHome"

const ExhibitionList = () => {
  const exhibitionData = useSelector((state) => state.exhibition.exhibitions)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    if (exhibitionData) dispatch(getExhibition(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div
        id="art"
        className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-x-5 gap-y-10 mx-5 my-20"
      >
        {exhibitionData.map((exhibition) => (
          <Card
            shadow={false}
            className="relative grid h-[30rem] w-full max-w-[30rem] items-end justify-center overflow-hidden text-center"
            key={exhibition.uuid}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              style={{ backgroundImage: `url(${exhibition.image[1]})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className="mb-6 font-medium leading-[1.5] uppercase"
              >
                {exhibition.title}
              </Typography>

              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white cursor-pointer"
                src={exhibition.image[0]}
                exhibition={exhibition.uuid}
                onClick={() => {
                  dispatch(getExhibition(exhibition.uuid, token))
                  navigate("/exhibition/detail/" + exhibition.uuid)
                }}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <ArtistHome />
      <BlogHome />
    </>
  )
}
export default ExhibitionList
