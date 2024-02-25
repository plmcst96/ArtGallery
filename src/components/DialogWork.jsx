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
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getGallery,
  loadGalleryId,
  postPicture,
  postWork,
} from "../redux/actions/artistWork"

// eslint-disable-next-line react/prop-types
export const DialogWork = ({ open, handler }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const artistId = localStorage.getItem("artistId")
  const galleryId = useSelector((state) => state.gallery.galleryId)
  const [img, setImg] = useState({
    image: "",
  })
  const [artistWork, setArtistWork] = useState({
    nameWork: "",
    description: "",
    technique: "",
    yearStartWork: "",
    galleryId: "",
    artistId: { uuid: artistId },
  })

  useEffect(() => {
    if (galleryId) {
      setArtistWork((prevArtistWork) => ({
        ...prevArtistWork,
        galleryId: galleryId.uuid,
      }))
    }
  }, [galleryId])

  const validateFields = (artistWork) => {
    const requiredFields = [
      "description",
      "nameWork",
      "technique",
      "yearStartWork",
      "galleryId",
      "artistId",
    ]
    const missingFields = requiredFields.filter((field) => !artistWork[field])

    if (missingFields.length > 0) {
      console.log("Campi mancanti:", missingFields)
      return false
    }

    return true
  }

  const handleSubmitWork = async (e) => {
    e.preventDefault()

    console.log(
      "Valore di artistWork prima dell'invio della richiesta POST:",
      artistWork
    )
    // Validazione dei campi
    if (!validateFields(artistWork)) {
      alert("Per favore, compila tutti i campi obbligatori.")
      return
    }

    console.log("Invio richiesta POST...")
    await dispatch(loadGalleryId(token, artistId))
    console.log(artistId, "tegs")

    dispatch(postWork(artistWork, token))

    const work = localStorage.getItem("artwork")
    dispatch(postPicture(work, token, img.image))

    alert("dati salvati!")
    setArtistWork({
      nameWork: "",
      description: "",
      technique: "",
      yearStartWork: "",
      galleryId: galleryId ? galleryId.uuid : "",
      artistId: { uuid: artistId },
    })
    dispatch(getGallery(token, galleryId))
    handler()
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
          onSubmit={handleSubmitWork}
        >
          <div className="mb-1 flex flex-col gap-6 justify-center ">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Work Name
            </Typography>
            <Input
              size="md"
              value={artistWork.nameWork}
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setArtistWork({
                  ...artistWork,
                  nameWork: e.target.value,
                })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Year Work
            </Typography>
            <Input
              type="text"
              size="md"
              value={artistWork.yearStartWork}
              placeholder="surname"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setArtistWork({
                  ...artistWork,
                  yearStartWork: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description Work
            </Typography>
            <Textarea
              type="text"
              size="md"
              value={artistWork.description}
              placeholder="history"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setArtistWork({
                  ...artistWork,
                  description: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Technique
            </Typography>
            <Input
              type="text"
              size="md"
              value={artistWork.technique}
              placeholder="birth"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setArtistWork({
                  ...artistWork,
                  technique: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Picture Work
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
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  )
}
