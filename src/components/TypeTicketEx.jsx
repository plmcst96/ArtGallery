/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import {
  postAccountSession,
  updateCounter,
  updateTotal,
} from "../redux/actions/ticket"
import { useDispatch, useSelector } from "react-redux"
import { loadStripe } from "@stripe/stripe-js"
import dayjs from "dayjs"
import { Button, Typography } from "@material-tailwind/react"

export const TypeTicketEx = ({ singleEx }) => {
  const dispatch = useDispatch()
  const typeTicket = useSelector((state) => state.ticket.selectedType)
  const hour = useSelector((state) => state.ticket.selectedTime)
  const date = useSelector((state) => state.ticket.selectedDate)
  const token = localStorage.getItem("token")
  const client = localStorage.getItem("clientSecret")

  // eslint-disable-next-line no-unused-vars
  const [checkoutUrl, setCheckoutUrl] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const stripePromise = loadStripe(
    "pk_test_51OjsnnGwPgiF6GXhj0Oan9F9QpnJAlsYsCPTXRvYhVJGH79wr7h8jPrZ2bwbHJ0QxicoYBa41BaW5J5L77hNEqD900d3HQoy4X"
  )
  const increment = (type) => {
    dispatch(updateCounter(type, typeTicket[type] + 1))
  }

  const decrement = (type) => {
    if (typeTicket[type] > 0) {
      dispatch(updateCounter(type, typeTicket[type] - 1))
    }
  }

  const calculateTotal = () => {
    if (!typeTicket) {
      return 0 // o un valore di default appropriato
    }
    const { standard, under7, over60, student } = typeTicket
    const { amount } = singleEx
    const standardTotal = standard * amount
    const under7Total = under7 * (amount - 5)
    const over60Total = over60 * (amount * 0.8)
    const studentTotal = student * (amount * 0.7)
    return standardTotal + under7Total + over60Total + studentTotal
  }

  useEffect(() => {
    dispatch(postAccountSession(token))
  }, [])

  const handleCheckout = async (e) => {
    e.preventDefault()
    if (!hour || !date || !singleEx || !typeTicket) {
      console.error("Dati incompleti per effettuare il checkout")
      return
    }
    try {
      const response = await fetch(
        "http://localhost:3001/v1/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            hour: hour,
            title: singleEx?.title,
            date: dayjs(date).format("YYYY-MM-DD"),
            image: singleEx?.image[0],
            amount: singleEx?.amount,
            maxNum: 10,
            typeTicket: typeTicket,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Errore durante la richiesta POST")
      }

      const data = await response.json()

      setClientSecret(client)
      setCheckoutUrl(data.checkoutUrl)
      console.log("Dati di risposta:", data)
      redirectToCheckout(data.sessionId)
    } catch (error) {
      console.error("Errore durante la gestione della richiesta POST:", error)
    }
  }

  const redirectToCheckout = async (url) => {
    try {
      const stripe = await stripePromise
      if (clientSecret) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: url,
        })

        if (error) {
          throw new Error(
            "Errore durante il reindirizzamento al checkout:",
            error
          )
        }
      } else {
        console.error(
          "Il clientSecret è null. Impossibile procedere con il checkout."
        )
      }
    } catch (error) {
      console.error(
        "Errore durante la gestione del reindirizzamento al checkout:",
        error
      )
    }
  }

  useEffect(() => {
    dispatch(updateTotal(calculateTotal()))
  }, [typeTicket])

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
            {singleEx && singleEx.amount && (
              <div className="text-end text-white">
                {/* Calcola il prezzo per ogni tipo di biglietto */}
                {type === "standard" && singleEx.amount.toFixed(2) + " €"}
                {type === "under7" && (singleEx.amount - 5).toFixed(2) + " €"}
                {type === "over60" && (singleEx.amount * 0.8).toFixed(2) + " €"}
                {type === "student" &&
                  (singleEx.amount * 0.7).toFixed(2) + " €"}
              </div>
            )}
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
      <div className="mt-10">
        <form onSubmit={handleCheckout}>
          <Button type="submit" className="bg-[#e71b82] rounded-full">
            Checkout
          </Button>
        </form>
      </div>
    </div>
  )
}
