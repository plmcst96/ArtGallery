import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleEvent } from "../redux/actions/event"
import { Button, Typography } from "@material-tailwind/react"
import DatePickerTicket from "../components/DatePickerTicket"

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
    <div className="mt-20">
      <Typography variant="h2" color="white" className="mx-20">
        BUYING TICKETS__
      </Typography>
      <div className="grid grid-cols-4 mx-20 my-20 gap-5">
        <div className="col-span-2">
          <img
            src={singleEvent.image[0]}
            alt="ticket-event"
            className=" h-60 rounded-xl"
            style={{ width: " 70%", objectFit: "cover" }}
          />
        </div>
        <div>
          <Typography variant="h5" className="text-[#e71b82] uppercase">
            {singleEvent.title}
          </Typography>
          <p className="text-white mt-5">{singleEvent.date}</p>
          <DatePickerTicket />
        </div>
      </div>
    </div>
  )
}
export default Ticket
