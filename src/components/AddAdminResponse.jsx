import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { postArtist } from "../redux/actions/artist"
import { postWork } from "../redux/actions/artistWork"
import { postExhibition } from "../redux/actions/exhibition"
import { addNotification } from "../redux/actions/notify"

export const AddAdminResponse = () => {
  const artist = JSON.parse(localStorage.getItem("artistRequest"))
  const ex = JSON.parse(localStorage.getItem("exhibitionRequest"))
  const work = JSON.parse(localStorage.getItem("workRequest"))
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
      {artist && (
        <Card className="mt-6 w-full flex justify-between">
          <CardBody>
            <Typography variant="h5" className="mb-2 text-[#e71b82] uppercase">
              Artist__
            </Typography>

            <Typography>{artist.name + " " + artist.surname}</Typography>
            <Typography>{artist.birthDate + " | " + artist.dieDate}</Typography>
            <Typography>{artist.quote}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="rounded-full"
              onClick={() => {
                dispatch(postArtist(artist, token))
                localStorage.removeItem("artistRequest")
                dispatch(
                  addNotification({
                    message: "Nuovo artista aggiunto",
                    type: "success",
                  })
                )
              }}
            >
              Add new artist
            </Button>
          </CardFooter>
        </Card>
      )}
      {work && (
        <Card className="mt-6 w-full flex justify-between">
          <CardBody>
            <Typography variant="h5" className="mb-2 text-[#e71b82] uppercase">
              Work__
            </Typography>

            <Typography>{work.nameWork}</Typography>
            <Typography>{work.yearStartWork}</Typography>
            <Typography>{work.technique}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="rounded-full"
              onClick={() => dispatch(postWork(work, token))}
            >
              Add new work
            </Button>
          </CardFooter>
        </Card>
      )}
      {ex && (
        <Card className="mt-6 w-full flex justify-between">
          <CardBody>
            <Typography variant="h5" className="mb-2 text-[#e71b82] uppercase">
              Exhibition__
            </Typography>

            <Typography>{ex.title}</Typography>
            <Typography>{ex.startDate + " | " + ex.endDate}</Typography>
            <Typography>{ex.openHour}</Typography>
            <Typography>{ex.amount + "€"}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="rounded-full"
              onClick={() => dispatch(postExhibition(ex, token))}
            >
              Add new exhibition
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
