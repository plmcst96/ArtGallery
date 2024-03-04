/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { DialogLocation } from "./DialogLocation"
import { useDispatch, useSelector } from "react-redux"
import { getLocationByUser, removeLocation } from "../redux/actions/location"
import CreditCardForm from "./CreditCardFrom"
import { DialogCard } from "./DialogCard"

// eslint-disable-next-line react/prop-types
export const ProfileInfo = ({ profile }) => {
  const [open, setOpen] = useState(1)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(!openDialog)
  const [openDialogCard, setOpenDialogCard] = useState(false)
  const handleOpenDialogCard = () => setOpenDialogCard(!openDialogCard)
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }
  const dispatch = useDispatch()
  const locationData = useSelector((state) => state.location.locationUser)
  const userId = localStorage.getItem("userId")
  const token = localStorage.getItem("token")
  const locationId = localStorage.getItem("locationId")
  const role = localStorage.getItem("role")
  const [elementRemoved, setElementRemoved] = useState(false)

  const handleRemoveLocation = () => {
    dispatch(removeLocation(locationId, token))
  }

  useEffect(() => {
    if (locationData) dispatch(getLocationByUser(userId, token))
    if (elementRemoved) {
      // Ricarica la pagina
      window.location.reload()
    }
  }, [elementRemoved])

  return (
    <div>
      <div>
        <Accordion
          open={open === 1}
          animate={CUSTOM_ANIMATION}
          className="h-full"
        >
          <AccordionHeader onClick={() => handleOpen(1)} className="text-white">
            MORE PERSONAL INFO__
          </AccordionHeader>
          <AccordionBody>
            <div className=" grid grid-cols-2flex flex-col">
              <div
                style={{
                  border: " 2px solid white",
                  borderStyle: "dashed",
                  borderRadius: "20px",
                }}
                className="w-96 h-40 flex justify-center item-center"
              >
                <div
                  className="flex flex-col items-center"
                  style={{ alignSelf: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-10 h-10 cursor-pointer"
                    onClick={handleOpenDialog}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <DialogLocation
                    open={openDialog}
                    handler={handleOpenDialog}
                  />
                  <Typography color="blue-gray" variant="h4" className="mt-5">
                    Add Address
                  </Typography>
                </div>
              </div>
              {locationData ? (
                <div>
                  {" "}
                  <Card className="mt-6 w-96">
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {profile?.name + " " + profile?.surname}
                      </Typography>
                      <Typography>{locationData?.address}</Typography>
                      <Typography>
                        {locationData?.city +
                          ", " +
                          locationData?.nation +
                          ", " +
                          locationData?.zipCode}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="w-6 h-6"
                        onClick={() => {
                          handleRemoveLocation()
                          setElementRemoved(true)
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </CardFooter>
                  </Card>
                </div>
              ) : null}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      {role === "USER" ? (
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-white">
            ADD CREDIT CARD__
          </AccordionHeader>
          <AccordionBody>
            <div className=" grid grid-cols-2flex flex-col">
              <div
                style={{
                  border: " 2px solid white",
                  borderStyle: "dashed",
                  borderRadius: "20px",
                }}
                className="w-96 h-40 flex justify-center item-center"
              >
                <div
                  className="flex flex-col items-center"
                  style={{ alignSelf: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-10 h-10 cursor-pointer"
                    onClick={handleOpenDialogCard}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <DialogCard
                    open={openDialogCard}
                    handler={handleOpenDialogCard}
                  />
                  <Typography color="blue-gray" variant="h4" className="mt-5">
                    Add Card
                  </Typography>
                </div>
              </div>
            </div>
            <CreditCardForm profile={profile} />
          </AccordionBody>
        </Accordion>
      ) : null}
    </div>
  )
}
