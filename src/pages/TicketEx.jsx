import { Button, Typography } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DatePickerTicket from "../components/DatePickerTicket"
import TimeSlotTicket from "../components/TimeSlotTicket"
import { TypeTicketEx } from "../components/TypeTicketEx"
import { useEffect } from "react"
import { getSingleExhibition } from "../redux/actions/exhibition"
import { getProfile } from "../redux/actions/user"

export const TicketEx = () => {
  const singleExhibition = useSelector(
    (state) => state.exhibition.singleExhibition
  )
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(getSingleExhibition(uuid, token))
    dispatch(getProfile(token))
  }, [token, dispatch, uuid])

  if (!singleExhibition) {
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
            src={singleExhibition.image[0]}
            alt="ticket-event"
            className=" rounded-xl"
            style={{ width: " 70%", objectFit: "cover", height: "60%" }}
          />
        </div>
        <div className=" md:col-span-2 w-full">
          <Typography variant="h4" className="text-[#e71b82] uppercase">
            {singleExhibition.title + "__"}
          </Typography>
          <p className="text-white mt-3">{singleExhibition.typeEvent}</p>
          <p className="text-white mt-3">{singleExhibition.date}</p>
          <DatePickerTicket />
          <TimeSlotTicket />
          <TypeTicketEx singleEx={singleExhibition} />
        </div>
      </div>
    </div>
  )
}
