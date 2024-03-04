import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleEvent } from "../redux/actions/event"
import { Button, Typography } from "@material-tailwind/react"
import ArtistHome from "./ArtistHome"
import { addFavouriteAction } from "../redux/actions/favourite"
import dayjs from "dayjs"

const EventDetail = () => {
  const singleEvent = useSelector((state) => state.event.singleEvent)
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const role = localStorage.getItem("role")

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

  const handleAddToFavourite = () => {
    console.log("Add to Favourite button clicked") // Verifica se il pulsante viene cliccato
    dispatch(addFavouriteAction(singleEvent))
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
            {role === "USER" ? (
              <Button
                className="text-white flex"
                variant="text"
                style={{ marginLeft: "190px" }}
                onClick={handleAddToFavourite}
              >
                Add to Favourite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#e71b82"
                  className="w-6 h-6 ml-5"
                  onClick={handleAddToFavourite}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Button>
            ) : null}
          </Typography>
        </div>
        <div className="grid-cols-1 text-end mr-20 my-20 flex items-baseline justify-end pt-5">
          <Typography
            variant="h6"
            color="white"
            style={{ marginTop: "3em", marginRight: "5em" }}
          >
            {dayjs(singleEvent.date).format("ddd, MMM D, YYYY")}
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
            onClick={() => navigate("/tickets/event/" + singleEvent.uuid)}
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
