/* eslint-disable react/prop-types */

import { Typography } from "@mui/material"

import {
  resetTicketState,
  updateCounter,
  updateTotal,
} from "../redux/actions/ticket"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { postCheckout } from "../redux/actions/checkout"
import { useNavigate } from "react-router-dom"
import StripeOption1 from "./StripeOption1"

// eslint-disable-next-line react/prop-types
const TypeTicket = ({ singleEvent }) => {
  const dispatch = useDispatch()
  const typeTicket = useSelector((state) => state.ticket.selectedType)
  const date = useSelector((state) => state.ticket.selectedDate)
  const hour = useSelector((state) => state.ticket.selectedTime)
  const total = useSelector((state) => state.ticket.total)
  const profile = useSelector((state) => state.profile.profile)
  const user = profile.uuid
  const event = singleEvent.uuid
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const checkoutDetails = { date, hour, typeTicket, total, event, user }

  const increment = (type) => {
    dispatch(
      updateCounter({
        ...typeTicket,
        [type]: typeTicket[type] + 1,
      })
    )
  }

  const decrement = (type) => {
    if (typeTicket[type] > 0) {
      dispatch(
        updateCounter({
          ...typeTicket,
          [type]: typeTicket[type] - 1,
        })
      )
    }
  }

  const calculateTotal = () => {
    const { standard, under7, over60, student } = typeTicket
    const { amount } = singleEvent

    // Calcola il prezzo totale per ogni tipo di biglietto, tenendo conto degli sconti
    const standardTotal = standard * amount
    const under7Total = under7 * (amount - 5)
    const over60Total = over60 * (amount * 0.8) // Sconto del 20% per over 60
    const studentTotal = student * (amount * 0.7) // Sconto del 30% per studenti

    // Calcola il totale sommando i totali di ciascuna categoria
    return standardTotal + under7Total + over60Total + studentTotal
  }

  const handleCheckout = () => {
    dispatch(postCheckout(checkoutDetails, token))
    dispatch(resetTicketState())
    navigate("/checkout/" + singleEvent.uuid)
  }

  const products = {
    Standard: {
      amount: singleEvent.amount,
      quantity: typeTicket.standard,
    },
    Under7: {
      amount: singleEvent.amount - 5,
      quantity: typeTicket.under7,
    },
    Over60: {
      amount: singleEvent.amount * 0.8,
      quantity: typeTicket.over60,
    },
    Student: {
      amount: singleEvent.amount * 0.7,
      quantity: typeTicket.student,
    },
  }

  useEffect(() => {
    const newTotal = calculateTotal()
    dispatch(updateTotal(newTotal))
  }, [])

  return (
    <div className="w-full mt-20">
      <Typography variant="h5" color="white" className="mt-10">
        Choose Category__
      </Typography>
      {Object.entries(typeTicket).map(([type, count]) => (
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
              {/* Calcola il prezzo per ogni tipo di biglietto */}
              {type === "standard" && singleEvent.amount.toFixed(2) + " €"}
              {type === "under7" && (singleEvent.amount - 5).toFixed(2) + " €"}
              {type === "over60" &&
                (singleEvent.amount * 0.8).toFixed(2) + " €"}
              {type === "student" &&
                (singleEvent.amount * 0.7).toFixed(2) + " €"}
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
        <StripeOption1
          products={products}
          buttonText="Checkout"
          handleCheckout={handleCheckout}
        />
      </div>
    </div>
  )
}
export default TypeTicket
