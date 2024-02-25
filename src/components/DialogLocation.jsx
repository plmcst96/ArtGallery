import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getLocationByUser, postLocation } from "../redux/actions/location"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const DialogLocation = ({ open, handler }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const userId = localStorage.getItem("userId")
  const [addLocation, setAddLocation] = useState({
    address: "",
    city: "",
    nation: "",
    zipCode: "",
    // eslint-disable-next-line react/prop-types
    userId: userId,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(postLocation(addLocation, token))
      setAddLocation({
        address: "",
        city: "",
        nation: "",
        zipCode: "",
        // eslint-disable-next-line react/prop-types
        userId: userId,
      })

      // eslint-disable-next-line react/prop-types
      await dispatch(getLocationByUser(userId, token))
      handler()
    } catch (error) {
      console.error("Error posting location:", error)
      // Handle error (display error message, etc.)
    }
  }

  return (
    <Dialog
      open={open}
      handler={handler}
      className="overflow-y-auto"
      style={{ height: "50%" }}
    >
      <DialogHeader className="text-[#e71b82] ml-20 mt-5 mb-0">
        ADD NEW ARTIST__
      </DialogHeader>
      <DialogBody className="flex justify-center">
        <form
          className="mt-8 mb-2 w-80 max-w-screen-sm sm:w-96 "
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6 justify-center ">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Address
            </Typography>
            <Input
              size="md"
              value={addLocation.address}
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setAddLocation({
                  ...addLocation,
                  address: e.target.value,
                })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              City
            </Typography>
            <Input
              type="text"
              size="md"
              value={addLocation.city}
              placeholder="city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddLocation({
                  ...addLocation,
                  city: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Zip Code
            </Typography>
            <Input
              type="text"
              size="md"
              value={addLocation.zipCode}
              placeholder="0000"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddLocation({
                  ...addLocation,
                  zipCode: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nation
            </Typography>
            <Input
              type="text"
              size="md"
              value={addLocation.nation}
              placeholder="IT"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddLocation({
                  ...addLocation,
                  nation: e.target.value,
                })
              }}
            />
          </div>
          <DialogFooter>
            <Button
              variant="text"
              onClick={handler}
              className="mr-1 text-[#e71b82]"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="text"
              color="white"
              className="bg-[#e71b82] rounded-full"
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  )
}
