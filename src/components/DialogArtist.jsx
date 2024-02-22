import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAlArtist, postArtist, postPicture } from "../redux/actions/artist"
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react"

// eslint-disable-next-line react/prop-types
export const DialogArtist = ({ open, handler }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [img, setImg] = useState({
    image: "",
  })
  const [addArtist, setAddArtist] = useState({
    name: "",
    surname: "",
    historyArtist: "",
    birthDate: "",
    dieDate: "",
    quote: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(postArtist(addArtist, token))
    const artistId = localStorage.getItem("artistId")
    await dispatch(postPicture(artistId, token, img.image))
    setAddArtist({
      name: "",
      surname: "",
      historyArtist: "",
      birthDate: "",
      dieDate: "",
      quote: "",
    })
    await dispatch(getAlArtist(token))
  }
  return (
    <Dialog
      open={open}
      handler={handler}
      className="overflow-y-auto"
      style={{ height: "75%" }}
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
              Artist Name
            </Typography>
            <Input
              size="md"
              value={addArtist.name}
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setAddArtist({
                  ...addArtist,
                  name: e.target.value,
                })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Artist Surname
            </Typography>
            <Input
              type="text"
              size="md"
              value={addArtist.surname}
              placeholder="surname"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddArtist({
                  ...addArtist,
                  surname: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              History Artist
            </Typography>
            <Textarea
              type="text"
              size="md"
              value={addArtist.historyArtist}
              placeholder="history"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddArtist({
                  ...addArtist,
                  historyArtist: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Birth
            </Typography>
            <Input
              type="text"
              size="md"
              value={addArtist.birthDate}
              placeholder="birth"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddArtist({
                  ...addArtist,
                  birthDate: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Death
            </Typography>
            <Input
              type="text"
              size="md"
              value={addArtist.dieDate}
              placeholder="die date"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddArtist({
                  ...addArtist,
                  dieDate: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Quote Artist
            </Typography>
            <Input
              type="text"
              size="md"
              value={addArtist.quote}
              placeholder="quote"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddArtist({
                  ...addArtist,
                  quote: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Picture Artist
            </Typography>
            <Input
              type="file"
              size="md"
              placeholder="quote"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImg({
                    image: e.target.files[0],
                  })
                }
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
              onClick={handler}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  )
}
