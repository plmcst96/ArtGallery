import { useDispatch } from "react-redux"
import { setTimeTicket } from "../redux/actions/ticket"
import { Button, Typography } from "@material-tailwind/react"
import { useState } from "react"

const TimeSlotTicket = () => {
  const timeslots = [
    { id: 1, time: "09:00", available: true },
    { id: 2, time: "10:00", available: true },
    { id: 3, time: "11:30", available: true },
    { id: 4, time: "12:40", available: true },
    { id: 5, time: "13:50", available: true },
    { id: 6, time: "14:30", available: true },
    { id: 7, time: "15:40", available: true },
    { id: 8, time: "16:20", available: true },
    { id: 9, time: "17:40", available: true },
    { id: 10, time: "18:40", available: true },
    { id: 11, time: "20:00", available: true },
    // Aggiungi altri orari disponibili
  ]
  const dispatch = useDispatch()
  const [selectedTime, setSelectedTime] = useState(null)
  const handleSelectTimeslot = (timeslot) => {
    dispatch(setTimeTicket(timeslot.time, (timeslot.available = false)))
    setSelectedTime(timeslot.id)
    console.log(timeslot.available)
  }

  return (
    <div className="w-full">
      <Typography
        variant="h5"
        color="white"
        className=" mt-10"
        style={{ fontSize: "22px" }}
      >
        Choose Time__
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5 mt-10">
        {timeslots.map((timeslot) => (
          <Button
            size="md:lg md"
            color="white"
            variant="text"
            className={`rounded-full ${
              selectedTime === timeslot.id ? "selected" : ""
            }`}
            disabled={!timeslot.available}
            onClick={() => handleSelectTimeslot(timeslot)}
            key={timeslot.id}
            style={{ fontSize: "14px" }}
          >
            {timeslot.time}{" "}
          </Button>
        ))}
      </div>
    </div>
  )
}
export default TimeSlotTicket
