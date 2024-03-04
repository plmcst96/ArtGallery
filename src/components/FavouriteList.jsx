import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { removeFavAction } from "../redux/actions/favourite"
import { useNavigate } from "react-router-dom"

const FavouriteList = () => {
  const favouriteA = useSelector((state) => state.favourite.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  return (
    <>
      <Typography
        variant="h3"
        className="text-[#e71b82] ms-10"
        style={{ marginTop: "3.6em" }}
      >
        MY FAVOURITE CONTENT__
      </Typography>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-10 gap-10"
        style={{ marginTop: "6em" }}
      >
        {favouriteA.map((data) => (
          <Card className="mt-6 w-full flex justify-between" key={data.uuid}>
            <CardHeader color="blue-gray" className="relative h-40">
              <img
                src={data.imageArtist || data.image[0]}
                alt="card-image"
                className="w-full h-40"
                style={{ objectFit: "cover" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {data.name && data.surname
                  ? data.name + " " + data.surname
                  : data.title}
              </Typography>
              <Typography>
                {data.quote !== undefined
                  ? "'" + data.quote + "'"
                  : data.description.slice(0, 100) + "..."}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="text"
                className="text-[#e71b82]"
                onClick={() =>
                  navigate(
                    "/artist/detail/" + data.uuid ||
                      "/event/detail/" + data.uuid
                  )
                }
              >
                Read More
              </Button>
              <Button variant="text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  onClick={() => dispatch(removeFavAction(data.uuid))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

export default FavouriteList
