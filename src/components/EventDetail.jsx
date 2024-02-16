import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleEvent } from "../redux/actions/event"
import { Button, Typography } from "@material-tailwind/react"
import ArtistHome from "./ArtistHome"

const EventDetail = () => {
  const singleEvent = useSelector((state) => state.event.singleEvent)
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!singleEvent) {
      dispatch(getSingleEvent(uuid, token))
    }
  }, [token, dispatch, uuid, singleEvent])

  if (!singleEvent) {
    return (
      <Button variant="text" loading={true}>
        Loading
      </Button>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="grid-cols-1">
          <Typography
            variant="h3"
            color="white"
            className="uppercase ms-20"
            style={{ marginTop: "5em" }}
          >
            {singleEvent.title + "__"}
          </Typography>
        </div>
        <div className="grid-cols-1 text-end mr-20 my-20 flex items-baseline justify-end pt-5">
          <Typography
            variant="h6"
            color="white"
            style={{ marginTop: "3em", marginRight: "5em" }}
          >
            {singleEvent.date}
          </Typography>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white ml-20">
            {singleEvent.description.slice(0, 1074)}
          </p>
        </div>
        <div className="flex  items-center">
          <img
            src={singleEvent.image[1]}
            alt="image event"
            style={{
              width: "40%",
              height: "70%",
              borderRadius: "30px",
              marginLeft: "15em",
            }}
          />
        </div>
        <div className="flex  items-center">
          <img
            src={singleEvent.image[0]}
            alt="image event"
            style={{
              width: "40%",
              height: "70%",
              borderRadius: "30px",
              marginLeft: "15em",
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white mx-20">
            {singleEvent.description.slice(1074)}
          </p>
        </div>
        <div className="flex justify-end col-span-2 mt-20 mr-20">
          <Button
            size="lg"
            variant="filled"
            className="rounded-full bottone mr-6 bg-[#e71b82] hover:bg-black "
            style={{ width: "170px" }}
            onClick={() => navigate("/tickets/" + singleEvent.uuid)}
          >
            Buy Ticket
          </Button>
        </div>
      </div>
      <ArtistHome />
    </>
  )
}
export default EventDetail
