import { Button } from "@material-tailwind/react"
import { loadStripe } from "@stripe/stripe-js"

// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.VITE_REACT_APP_MY_SECRET_KEY)

// eslint-disable-next-line react/prop-types
const StripeOption1 = ({ products, buttonText, handleCheckout }) => {
  const handleClick = async () => {
    const stripe = await stripePromise
    const lineItems = Object.entries(products).map(([name, product]) => ({
      price_data: {
        product_data: {
          name: name,
        },
        currency: "eur",
        unit_amount: product.amount * 100,
      },
      quantity: product.quantity,
    }))

    // Redirect to Checkout.
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: "http://localhost:3000/successful-payment",
      cancelUrl: "http://localhost:3000/denied-payment",
    })

    if (error) {
      console.error("Something went wrong at the checkout:", error.message)
    }
  }

  return (
    <Button
      className="brownish-button px-4 py-2 rounded fw-bold text-white"
      onClick={() => {
        handleClick()
        handleCheckout() // Chiamata alla funzione handleCheckout
      }}
    >
      {buttonText}
    </Button>
  )
}

export default StripeOption1
