/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"

export const DialogCard = ({ open, handler }) => {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  const handleAddCreditCard = () => {
    // Costruisci l'oggetto carta di credito
    const creditCard = {
      cardNumber,
      expiryDate,
      cvv,
    }

    // Salva la carta di credito nel localStorage
    localStorage.setItem("creditCard", JSON.stringify(creditCard))
    alert("The Credit Card is saved")

    // Resetta i campi del modulo dopo aver salvato la carta di credito
    setCardNumber("")
    setExpiryDate("")
    setCvv("")
    handler()
  }

  return (
    <Dialog
      open={open}
      handler={handler}
      className="overflow-y-auto"
      style={{ height: "45%" }}
    >
      <DialogHeader className="text-[#e71b82] ml-20 mt-5 mb-0">
        ADD NEW ARTIST__
      </DialogHeader>
      <DialogBody className="flex justify-center">
        <form className="flex w-72 flex-col gap-6 mt-10">
          <Typography>Number Credit Card</Typography>
          <Input
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            placeholder="Number Card"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <Typography>Expiration Date</Typography>
          <Input
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            placeholder="end Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <Typography>CVV</Typography>
          <Input
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <Button onClick={handleAddCreditCard} className="bg-[#e71b82]">
            Add card
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  )
}
