/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react"
import { Typography } from "@mui/material"

import { updateCounter, updateTotal } from "../redux/actions/ticket"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { postCheckout } from "../redux/actions/checkout"

// eslint-disable-next-line react/prop-types
const TypeTicket = ({ singleEvent }) => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.ticket.selectedType)
  const date = useSelector((state) => state.ticket.selectedDate)
  const time = useSelector((state) => state.ticket.selectedTime)
  const tot = useSelector((state) => state.ticket.total)
  const token = localStorage.getItem("token")
  const checkoutDetails = { date, time, count, tot }

  const increment = (type) => {
    dispatch(
      updateCounter({
        ...count,
        [type]: count[type] + 1,
      })
    )
  }

  const decrement = (type) => {
    if (count[type] > 0) {
      dispatch(
        updateCounter({
          ...count,
          [type]: count[type] - 1,
        })
      )
    }
  }

  const calculateTotal = () => {
    const { standard, under7, over60, student } = count
    const standardTotal = standard * singleEvent.amount
    const under7Total = under7 * (singleEvent.amount - 15)
    const over60Total = over60 * (singleEvent.amount - 12)
    const studentTotal = student * (singleEvent.amount - 16.9)
    return standardTotal + under7Total + over60Total + studentTotal
  }

  useEffect(() => {
    const newTotal = calculateTotal()
    dispatch(updateTotal(newTotal))
  }, [count, singleEvent.amount, dispatch])

  const handleCheckout = () => {
    dispatch(postCheckout(checkoutDetails, token))
  }

  return (
    <div className="w-full mt-20">
      <Typography variant="h5" color="white" className="mt-10">
        Choose Category__
      </Typography>
      {Object.entries(count).map(([type, count]) => (
        <div key={type}>
          <div className="grid grid-cols-3 col-span-2 mt-10">
            <div>
              <Typography color="white">{type}</Typography>
            </div>
            <div
              className="flex items-center justify-center ms-10"
              style={{
                border: "1px solid white",
                width: "160px",
                borderRadius: " 25px",
              }}
            >
              <button
                className=" text-white font-bold py-2 px-4 rounded-l"
                onClick={() => decrement(type)}
              >
                -
              </button>
              <span className=" px-4 py-2 text-white">{count}</span>
              <button
                className=" text-white font-bold py-2 px-4 rounded-r"
                onClick={() => increment(type)}
              >
                +
              </button>
            </div>
            <div className="text-end text-white">
              {/* Calcola il totale per ogni tipo di biglietto */}
              {type === "standard" && singleEvent.amount + " €"}
              {type === "under7" &&
                parseFloat(singleEvent.amount - 15).toFixed(2) + " €"}
              {type === "over60" &&
                parseFloat(singleEvent.amount - 12).toFixed(2) + " €"}
              {type === "student" &&
                parseFloat(singleEvent.amount - 16.9).toFixed(2) + " €"}
            </div>
          </div>
          <hr className="mt-5" />
        </div>
      ))}

      {/* Visualizzazione del totale */}
      <div className="grid grid-cols-2">
        <div className="mt-5">
          <Typography color="white" style={{ fontWeight: "bold" }}>
            Total
          </Typography>
        </div>
        <div className="mt-5">
          <Typography color="white" className="text-end">
            {calculateTotal().toFixed(2)} €
          </Typography>
        </div>
      </div>
      <div className="grid flex justify-end mt-10">
        <Button
          variant="filled"
          className="bg-[#e71b82] rounded-full"
          size="md"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}
export default TypeTicket
