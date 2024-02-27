import { Button } from "@material-tailwind/react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ handleCheckout, calculateTotal }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (error) {
      console.error("Error creating payment method:", error)
      setError(error.message) // Set error state if payment method creation fails
    } else {
      console.log("Payment Method:", paymentMethod)
      handleCheckout() // Call the function to handle checkout after payment method is created
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mb-10">
        <CardElement />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message if exists */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe}
        className="bg-[#e71b82] rounded-full"
      >
        Pay {calculateTotal().toFixed(2)} €
      </Button>
    </form>
  )
}

export default CheckoutForm
