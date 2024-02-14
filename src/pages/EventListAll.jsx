import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getAllEvents, getSingleEvent } from "../redux/actions/event"

const EventsListAll = () => {
  const eventData = useSelector((state) => state.event.events)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllEvents(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mb-20">
      <h2
        className="text-white ml-20"
        style={{ marginTop: "3em", fontSize: "2em", marginBottom: "2em" }}
      >
        EVENTS__
      </h2>
      {eventData.map((event) => (
        <div key={event.uuid}>
          <Card className="w-full lg:max-w-[70rem] max-w-[35rem] flex-row bg-transparent ml-20 my-10">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-full"
            >
              <img
                src={event.image[0]}
                alt="card-image"
                className="h-full w-full"
                style={{ objectFit: "cover" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="white" className="mb-2">
                {event.title}
              </Typography>
              <Typography color="white" className="mb-8 font-normal">
                {event.description.slice(0, 500)}
              </Typography>
              <p>{event.date}</p>

              <div className="flex justify-start gap-2 mt-10">
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
                  onClick={() => {
                    dispatch(getSingleEvent(event.uuid, token))
                    navigate("/event/detail/" + event.uuid)
                  }}
                >
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>
          <hr className="mt-10 mx-10" />
        </div>
      ))}
    </div>
  )
}
export default EventsListAll
