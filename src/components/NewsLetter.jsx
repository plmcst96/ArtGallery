import { Checkbox, Button, Input, Typography } from "@material-tailwind/react"

const NewsLetter = () => {
  return (
    <div id="new" className="grid grid-cols-1 w-full mt-20">
      <div
        style={{ width: "510px", marginLeft: "50%" }}
        className="flex justify-end"
      >
        <form className="mt-20">
          <h2 className="mb-4 text-white">SUBSCRIBE TO NEWSLETTER</h2>
          <p className="mb-10 text-white" style={{ fontSize: "12px" }}>
            Be the first to know about new exhibition and the latest from Women
            art
          </p>
          <Input label="Email" className="rounded-full" color="white" />
          <Checkbox
            className="mt-5"
            label={
              <Typography
                className="flex font-ligth text-white mt-5"
                style={{ fontSize: "13px" }}
              >
                By submitting contact information, you agree to the
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-medium transition-colors hover:text-blue-700"
                  style={{ fontSize: "13px" }}
                >
                  &nbsp;Privacy Policy
                </Typography>
                .
              </Typography>
            }
          />
          <Button fullWidth className="bg-[#e71b82] rounded-full mt-10">
            Log In
          </Button>
        </form>
      </div>
    </div>
  )
}
export default NewsLetter
