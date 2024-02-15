import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleArtist } from "../redux/actions/artist"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import ArtistDetaillHist from "../components/ArtistDetailHist"
import Gallery from "../components/Gallery"
import { loadGalleryId } from "../redux/actions/artistWork"

const ArtistDetail = () => {
  const singleArtist = useSelector((state) => state.artist.singleArtist)
  // eslint-disable-next-line no-unused-vars
  const galleryId = useSelector((state) => state.gallery.galleryId)
  const { uuid } = useParams()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!singleArtist) {
      dispatch(getSingleArtist(uuid, token))
    }

    dispatch(loadGalleryId(token, uuid))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, singleArtist, uuid, token])

  if (!singleArtist) {
    return (
      <Button variant="text" loading={true}>
        Loading
      </Button>
    )
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
            backgroundImage: `url(${singleArtist.imageArtist})`,
            marginTop: "4em",
          }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14  md:px-12 w-full">
          <Typography variant="h2" className="mb-20 text-white uppercase">
            {singleArtist.name + " " + singleArtist.surname}
          </Typography>
          <div className="flex justify-center items-center gap-4 md:gap-20 relative h-10  ">
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
              onClick={() => setShowModal(true)}
            >
              History
            </Button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl  rounded-full">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
                        <p
                          color="blue-gray"
                          className=" font-bold ms-3"
                          style={{ fontSize: "16px" }}
                        >
                          HISTORY
                        </p>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="m-4 text-blueGray-500 text-md leading-relaxed">
                          {singleArtist.historyArtist}
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-[#e71b82] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
            >
              <a href="#gallery">Gallery</a>
            </Button>
            <Button
              size="lg"
              color="white"
              variant="outlined"
              className="rounded-full bottone"
              style={{ width: "140px" }}
            >
              Exhibition
            </Button>
          </div>
        </CardBody>
      </Card>
      <ArtistDetaillHist singleArtist={singleArtist} />
      <Gallery />
    </>
  )
}
export default ArtistDetail
