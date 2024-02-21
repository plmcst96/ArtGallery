import { Button } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const FavouriteIndicatore = () => {
  const navigate = useNavigate()
  const favouriteLength = useSelector((state) => state.favourite.content.lenght)

  return (
    <Button variant="text" size="sm" className="hidden lg:inline-block mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#e71b82"
        className="w-6 h-6"
        onClick={() => navigate("/favourite")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <span className="ms-2">{favouriteLength}</span>
    </Button>
  )
}

export default FavouriteIndicatore
