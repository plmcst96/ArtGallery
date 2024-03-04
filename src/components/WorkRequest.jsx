import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Textarea,
  Typography,
  Input,
} from "@material-tailwind/react"
import { useState } from "react"

export const WorkRequest = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const artist = JSON.parse(localStorage.getItem("artistRequest"))
  const [formData, setFormData] = useState({
    uuid: uuidv4(),
    nameWork: "",
    yearStartWork: "",
    technique: "",
    description: "",
    artistId: artist?.uuid,
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
    localStorage.setItem("workRequest", JSON.stringify(formData))
    // Optionally, you can clear the form data after submission
    setFormData({
      uuid: requestId,
      nameWork: "",
      yearStartWork: "",
      technique: "",
      description: "",
      artistId: "",
    })
    toggleFormVisibility()
  }

  return (
    <div>
      <div>
        <Card
          className="mt-6 w-full flex justify-between"
          style={{ height: "200px" }}
        >
          <CardBody>
            <Typography variant="h5" className="mb-2 text-[#e71b82]">
              Art Work__
            </Typography>
            <Typography>Add a new Art Work to the list!</Typography>
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
              New Art Work__
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Oh ok! You want to add a new Art Work? Alerady!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Art Work Name
                </Typography>
                <Input
                  size="lg"
                  name="nameWork"
                  value={formData.nameWork}
                  onChange={handleInputChange}
                  placeholder="name"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Work Date
                </Typography>
                <Input
                  size="lg"
                  name="yearStartWork"
                  value={formData.yearStartWork}
                  onChange={handleInputChange}
                  placeholder="surname"
                  className=" !border-t-white-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Technique
                </Typography>
                <Input
                  type="text"
                  name="technique"
                  value={formData.technique}
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
