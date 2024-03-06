import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export const ArtistRequest = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    uuid: uuidv4(),
    name: "",
    surname: "",
    birthDate: "",
    dieDate: "",
    historyArtist: "",
    quote: "",
  })

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    // Save form data to local storage
    const requestId = uuidv4()
    localStorage.setItem("artistRequest", JSON.stringify(formData))
    // Optionally, you can clear the form data after submission
    setFormData({
      uuid: requestId,
      name: "",
      surname: "",
      birthDate: "",
      dieDate: "",
      historyArtist: "",
      quote: "",
    })
    toast.success("New artist request sent successfully!")

    toggleFormVisibility()
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <div>
      <ToastContainer />
      <div>
        <Card
          className="mt-6 w-full flex justify-between"
          style={{ height: "200px" }}
        >
          <CardBody>
            <Typography variant="h5" className="mb-2 text-[#e71b82]">
              Artist Request__
            </Typography>
            <Typography>Add a new artist to the list!</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={toggleFormVisibility} className="rounded-full">
              Add request
            </Button>
          </CardFooter>
        </Card>
      </div>
      {isFormVisible && (
        <div
          className="flex justify-start item-center mt-20"
          style={{ width: "780px" }}
        >
          <Card color="transparent" className="">
            <Typography variant="h4" className="text-[#e71b82]">
              New Artist__
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Oh ok! You want to add a new Artist? Alerady!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Artist Name
                </Typography>
                <Input
                  size="lg"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="name"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Artist Surname
                </Typography>
                <Input
                  size="lg"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="surname"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Artist Birth
                </Typography>
                <Input
                  type="text"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="date"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Artist Death
                </Typography>
                <Input
                  type="text"
                  name="dieDate"
                  value={formData.dieDate}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="date"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  History Artist
                </Typography>
                <Textarea
                  type="text"
                  name="historyArtist"
                  value={formData.historyArtist}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="history"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Quote
                </Typography>
                <Input
                  type="text"
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="quote"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {/* Add other input fields similarly */}
              </div>
              <Button
                className="mt-6 bg-[#e71b82] rounded-full"
                fullWidth
                onClick={handleFormSubmit}
              >
                Add Artist
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}

// Function to generate UUID (Universally Unique Identifier)
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
