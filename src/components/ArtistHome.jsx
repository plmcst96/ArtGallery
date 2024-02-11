import { Link, useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAlArtist } from "../redux/actions/artist"

const ArtistHome = () => {
  const artistData = useSelector((state) => state.artist.artists)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAlArtist(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="grid grid-cos-1">
      <h2 className="text-white ml-20" style={{ marginTop: "4em" }}>
        ARTIST__
      </h2>
      <div
        className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6 m-8 artist"
        style={{ marginTop: "3em" }}
      >
        {artistData
          .map((artist) => (
            <div className="flex flex-col items-center" key={artist.uuid}>
              <button
                style={{ border: "3px solid white" }}
                className="rounded-full"
              >
                <img
                  src={artist.imageArtist}
                  alt=""
                  className="rounded-full"
                  style={{ width: "250px", height: "250px" }}
                  onClick={() => {
                    navigate("/artist/detail/" + artist.uuid)
                  }}
                />
              </button>

              <h3
                className="text-white text-bold mt-10 uppercase"
                style={{ fontSize: "18px" }}
                onClick={() => {
                  navigate("/artist/detail/" + artist.uuid)
                }}
              >
                {artist.name + "  " + artist.surname}
              </h3>
            </div>
          ))
          .slice(0, 5)}
      </div>
      <button
        className="flex items-center justify-end gap-2 px-6 py-3 font-sans text-md font-light text-center text-white align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:text-pink-500 mr-10"
        type="button"
      >
        <Link to="/artist">View More</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  )
}
export default ArtistHome
