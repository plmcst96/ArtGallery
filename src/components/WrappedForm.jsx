import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51OjsnnGwPgiF6GXhj0Oan9F9QpnJAlsYsCPTXRvYhVJGH79wr7h8jPrZ2bwbHJ0QxicoYBa41BaW5J5L77hNEqD900d3HQoy4X"
)

// eslint-disable-next-line react/prop-types
const WrappedCheckoutForm = ({ handleCheckout, calculateTotal }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        handleCheckout={handleCheckout}
        calculateTotal={calculateTotal}
      />
    </Elements>
  )
}

export default WrappedCheckoutForm
