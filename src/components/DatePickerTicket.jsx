import { styled } from "@mui/material/styles"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setDateTicket } from "../redux/actions/ticket"

const StyledStaticDatePicker = styled(StaticDatePicker)({
  ".MuiPickersDay-root": {
    color: "#04060a",
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "#e71b82",
    border: "0px solid",
    backgroundColor: "white",
  },
  ".MuiPickersToolbar-root": {
    color: "#e71b82",
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "#white",
    border: "0px solid",
    backgroundColor: "white",
  },
  ".MuiPickersDay-today": {
    color: "white",
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "#e71b82",
    border: "0px solid",
    backgroundColor: "#e71b82",
  },
})
const DatePickerTicket = () => {
  const [date, setDate] = useState(null)
  const dispatch = useDispatch() // Ottieni la funzione dispatch

  const handleDateChange = (newDate) => {
    const formattedDate = newDate.toString("yyyy-MM-dd")
    setDate(newDate)
    dispatch(setDateTicket(formattedDate))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <StyledStaticDatePicker
        value={date}
        onChange={handleDateChange}
        ToolbarComponent={() => null}
      />
    </LocalizationProvider>
  )
}

export default DatePickerTicket
