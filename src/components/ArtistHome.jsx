import { Link } from "react-router-dom"
import frida from "../assets/frida2.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAlArtist } from "../redux/actions/artist"

const ArtistHome = () => {
  const artistData = useSelector((state) => state.artist.artists)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(getAlArtist(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="grid grid-cos-1">
      <h2 className="text-white ml-20" style={{ marginTop: "6em" }}>
        ARTIST__
      </h2>
      <div
        className="grid grid-cols-5 gap-x-8 gap-y-6 m-8 artist"
        style={{ marginTop: "3em" }}
      >
        {artistData.map((artist) => (
          <div className="flex flex-col items-center" key={artist.uuid}>
            <Link to="/artist/detail">
              <button
                style={{ border: "3px solid white" }}
                className="rounded-full"
              >
                <img src={frida} alt="" className="rounded-full" />
              </button>
            </Link>
            <Link to="/artist/detail">
              <h3
                className="text-white text-bold mt-10"
                style={{ fontSize: "18px" }}
              >
                {artist.name + " " + artist.surname}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="flex items-center justify-end gap-2 px-6 py-3 font-sans text-md font-bold text-center text-white align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:text-pink-500"
        type="button"
      >
        View More
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
