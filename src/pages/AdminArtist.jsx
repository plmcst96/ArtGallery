import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getAlArtist,
  getSingleArtist,
  removeArtist,
} from "../redux/actions/artist"
import {
  deleteGallery,
  deleteWork,
  getGallery,
  loadGalleryId,
  postGallery,
} from "../redux/actions/artistWork"
import { DialogArtist } from "../components/DialogArtist"
import { DialogWork } from "../components/DialogWork"

const AdminArtist = () => {
  const artistData = useSelector((state) => state.artist.artists)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const galleryId = useSelector((state) => state.gallery.galleryId)
  const galleryData = useSelector((state) => state.gallery.gallery)
  const [open, setOpen] = useState(false)
  const [openWork, setOpenWork] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [gallery, setGallery] = useState({
    artistUuid: "",
  })

  const handleOpen = () => setOpen(!open)
  const handleOpenWork = () => setOpenWork(!openWork)

  useEffect(() => {
    dispatch(getAlArtist(token))
  }, [dispatch, token])

  const handleArtistClick = async (artistId) => {
    dispatch(getSingleArtist(artistId, token))
    const galleryData = {
      artistUuid: artistId,
    }
    if (!galleryId > 0) {
      dispatch(postGallery(galleryData, token))
    }
    await dispatch(loadGalleryId(token, artistId))
  }

  const handleDeleteArt = async (artistId) => {
    try {
      dispatch(deleteGallery(galleryId.uuid, token))
      await dispatch(removeArtist(artistId, token))
    } catch (error) {
      console.error("Error deleting artist and associated gallery:", error)
    }
  }

  useEffect(() => {
    if (galleryId) {
      dispatch(getGallery(token, galleryId))
    }
  }, [dispatch, token, galleryId])

  const handleDeleteWork = async (index) => {
    try {
      await dispatch(deleteWork(index, token))
      // Dopo aver eliminato l'opera, aggiorna la lista delle opere richiedendo nuovamente i dati
      if (galleryId) {
        dispatch(getGallery(token, galleryId))
      }
    } catch (error) {
      console.error("Error deleting work:", error)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-10">
      <div className="col-span-3">
        <Typography
          variant="h3"
          className="text-[#e71b82] mt-20 mx-10 flex items-center"
        >
          ARTIST__
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#e71b82"
            className="w-8 h-8 ml-10"
            onClick={handleOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Typography>
        <DialogArtist open={open} handler={handleOpen} />

        <div className="grid xl:grid-cols-2 grid-cols-1 col-span-3">
          {artistData.map((artist) => (
            <div
              key={artist.uuid}
              className="text-white uppercase mx-10 flex my-5"
            >
              <img
                src={artist.imageArtist}
                alt="list"
                className="w-20 h-20 mr-5 rounded-full"
              />
              <div className="grid grid-cols-3 flex justify-between w-full">
                <div className="col-span-2">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onChange={() =>
                      setGallery({
                        artistUuid: artist.uuid,
                      })
                    }
                    onClick={() => {
                      handleArtistClick(artist.uuid)
                    }}
                  >
                    {artist.name + "__" + artist.surname}
                  </p>
                  <p className="lowercase" style={{ fontSize: "14px" }}>
                    Birth: {artist.birthDate}
                  </p>
                  <p className="lowercase" style={{ fontSize: "14px" }}>
                    death: {artist.dieDate === null ? "alive" : artist.dieDate}
                  </p>
                </div>
                <div className="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                    onClick={() => handleDeleteArt(artist.uuid)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-[#EFEFEF] m-5 mt-20 rounded-xl pb-10 col-span-2"
        style={{ width: "80%" }}
      >
        <Typography variant="h3" className="text-[#e71b82] mt-10 mx-10">
          WORK__
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#e71b82"
            className="w-8 h-8 ml-10"
            onClick={handleOpenWork}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Typography>{" "}
        <DialogWork open={openWork} handler={handleOpenWork} />
        {galleryData.map((gallery) => (
          <div
            key={gallery[1].uuid}
            className="text-blue-gray uppercase mx-10 flex my-5"
          >
            <img
              src={gallery[1].image}
              alt="list"
              className="w-20 h-20 mr-5 rounded-full"
            />
            <div className="grid grid-cols-3 flex justify-between w-full">
              <div className="col-span-2">
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {gallery[1].nameWork}
                </p>
                <p className="lowercase" style={{ fontSize: "14px" }}>
                  technique: {gallery[1].technique}
                </p>
                <p className="lowercase" style={{ fontSize: "14px" }}>
                  start work: {gallery[1].yearStartWork}
                </p>
              </div>
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                  onClick={() => handleDeleteWork(gallery[1].uuid)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AdminArtist
