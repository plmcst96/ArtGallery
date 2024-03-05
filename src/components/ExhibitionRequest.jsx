import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ExhibitionRequest = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const work = JSON.parse(localStorage.getItem("workRequest"))
  const [formData, setFormData] = useState({
    uuid: uuidv4(),
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    amount: "",
    openHour: "",
    artistWork: work?.uuid,
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
    localStorage.setItem("exhibitionRequest", JSON.stringify(formData))
    // Optionally, you can clear the form data after submission
    setFormData({
      uuid: requestId,
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      amount: "",
      openHour: "",
      artistWork: "",
    })
    toast.success("New exhibition request sent successfully!")
    toggleFormVisibility()
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
              Exhibition__
            </Typography>
            <Typography>Add a new Exhibition to the list!</Typography>
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
              New Exhibition__
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Oh ok! You want to add a new Art Work? Alerady!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Title
                </Typography>
                <Input
                  size="lg"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="name"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Start Date
                </Typography>
                <Input
                  size="lg"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  placeholder="surname"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  End Date
                </Typography>
                <Input
                  size="lg"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  placeholder="surname"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Open Hour
                </Typography>
                <Input
                  type="text"
                  name="openHour"
                  value={formData.openHour}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="date"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Description
                </Typography>
                <Textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="history"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Amount
                </Typography>
                <Input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  size="lg"
                  placeholder="date"
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
                Add Art Work
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
