import { Typography } from "@material-tailwind/react"

const Checkout = () => {
  return (
    <div style={{ marginTop: "8em" }}>
      <Typography variant="h2" color="white" className="mx-20">
        CHECKOUT__
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-20 my-20 gap-5"></div>
    </div>
  )
}
export default Checkout
