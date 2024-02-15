import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleEvent } from "../redux/actions/event"
import { Button, Typography } from "@material-tailwind/react"
import DatePickerTicket from "../components/DatePickerTicket"
import TimeSlotTicket from "../components/TimeSlotTicket"
import TypeTicket from "../components/TypeTicket"

const Ticket = () => {
  const singleEvent = useSelector((state) => state.event.singleEvent)
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(getSingleEvent(uuid, token))
  }, [token, dispatch, uuid])

  if (!singleEvent) {
    return (
      <Button variant="text" loading={true}>
        Loading
      </Button>
    )
  }

  return (
    <div style={{ marginTop: "8em" }}>
      <Typography variant="h2" color="white" className="mx-20">
        BUYING TICKETS__
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-20 my-20 gap-5">
        <div className="col-span-2">
          <img
            src={singleEvent.image[0]}
            alt="ticket-event"
            className=" rounded-xl"
            style={{ width: " 70%", objectFit: "cover", height: "60%" }}
          />
        </div>
        <div className=" md:col-span-2 w-full">
          <Typography variant="h4" className="text-[#e71b82] uppercase">
            {singleEvent.title + "__"}
          </Typography>
          <p className="text-white mt-3">{singleEvent.date}</p>
          <DatePickerTicket />
          <TimeSlotTicket />
          <TypeTicket singleEvent={singleEvent} />
        </div>
      </div>
    </div>
  )
}
export default Ticket
