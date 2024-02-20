import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleExhibition } from "../redux/actions/exhibition"
import { getLocationByExhibition } from "../redux/actions/location"

const ExhibitionDetail = () => {
  const singleExhibition = useSelector(
    (state) => state.exhibition.singleExhibition
  )
  const locationExhibition = useSelector(
    (state) => state.location.locationExhibition
  )
  const [isLoading, setIsLoading] = useState(true)
  const { uuid } = useParams()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exhibitionPromise = dispatch(getSingleExhibition(uuid, token))
        const locationPromise = dispatch(getLocationByExhibition(uuid, token))
        await Promise.all([exhibitionPromise, locationPromise])
        setIsLoading(false)
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, uuid, token])

  if (isLoading) {
    return (
      <Button variant="text" disabled>
        Loading...
      </Button>
    )
  }

  if (!singleExhibition) {
    return <div>No data available</div>
  }

  return (
    <>
      <Card
        shadow={false}
        className="relative grid h-[32rem] w-full items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={{
            backgroundImage: `url(${singleExhibition.image[0]})`,
            marginTop: "4em",
          }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14  md:px-12 w-full">
          <Typography variant="h2" className="mb-20 text-white uppercase">
            {singleExhibition.title}
          </Typography>
        </CardBody>
      </Card>
      <div className="ml-20 mt-10 grid grid-cols-3">
        <Card className="mt-6 bg-[#EFEFEF]">
          <Typography variant="h5" className="text-[#e71b82] px-6 pt-6">
            Exhibition Detail
          </Typography>
          <hr style={{ border: "1px solid #e71b82", margin: "20px" }} />
          <CardBody>
            <p color="blue-gray" className="mb-2 grid-cols2">
              <span style={{ fontWeight: "bold" }}>Location: </span>
              {locationExhibition.museumName}
            </p>
            <p color="blue-gray" className="mb-2 grid-cols2">
              <span style={{ fontWeight: "bold" }}>Start Date: </span>
              {singleExhibition.startDate}
            </p>
            <p color="blue-gray" className="mb-2 grid-cols2">
              <span style={{ fontWeight: "bold" }}>End Date: </span>
              {singleExhibition.endDate}
            </p>
            <p color="blue-gray" className="mb-2 grid-cols2">
              <span style={{ fontWeight: "bold" }}>Address: </span>
              {locationExhibition.address +
                ", " +
                locationExhibition.zipCode +
                ", " +
                locationExhibition.city}
            </p>
            <p color="blue-gray" className="mb-2 grid-cols2">
              <span style={{ fontWeight: "bold" }}>Amount: </span>
              {singleExhibition.amount + ",00 €"}
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2 mt-20">
        <div className="flex justify-center items-center">
          <p className="text-white ml-20">
            {singleExhibition.description.slice(0, 1074)}
          </p>
        </div>
        <div className="flex  items-center">
          <img
            src={singleExhibition.image[1]}
            alt="image event"
            style={{
              width: "40%",
              height: "70%",
              borderRadius: "30px",
              marginLeft: "15em",
            }}
          />
        </div>
        <div className="flex  items-center">
          <img
            src={singleExhibition.image[0]}
            alt="image event"
            style={{
              width: "40%",
              height: "70%",
              borderRadius: "30px",
              marginLeft: "15em",
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white mx-20">
            {singleExhibition.description.slice(1074)}
          </p>
        </div>
        <div className="flex justify-end col-span-2 mt-20 mr-20">
          <Button
            size="lg"
            variant="filled"
            className="rounded-full bottone mr-6 bg-[#e71b82] hover:bg-black "
            style={{ width: "170px" }}
            onClick={() =>
              navigate("/tickets/exhibition/" + singleExhibition.uuid)
            }
          >
            Buy Ticket
          </Button>
        </div>
      </div>
    </>
  )
}
export default ExhibitionDetail
