import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"
import dayjs from "dayjs"
import image from "../assets/barcode copia.png"

export const PdfTicket = () => {
  const event = JSON.parse(localStorage.getItem("evetData"))
  const type = localStorage.getItem("standard")
  const data = localStorage.getItem("ticketDate")
  const time = localStorage.getItem("ticketTime")
  return (
    <Card className="w-full max-w-[80rem] flex-row mt-20 mx-20 h-96">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/6 shrink-0 rounded-r-none"
      >
        <img
          src={event.image[0]}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-row h-full">
          <div className="w-full">
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 uppercase text-[#e71b82]"
            >
              event_
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 uppercase"
            >
              {event.title}
            </Typography>
            <Typography className="uppercase">{type}</Typography>
            <Typography className="uppercase mt-5 font-bold">
              {dayjs(data).format("ddd, MMM D, YYYY")}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {time}
            </Typography>
          </div>
          <div className="w-80 justify-end flex">
            <img src={image} alt="bar" className="w-20 h-full" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
