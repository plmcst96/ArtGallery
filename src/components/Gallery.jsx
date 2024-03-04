import { CardHeader, Step, Stepper, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGallery } from "../redux/actions/artistWork"
import WorkDetail from "./WorkDetail"

const Gallery = () => {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const galleryId = useSelector((state) => state.gallery.galleryId)
  const galleryData = useSelector((state) => state.gallery.gallery)

  useEffect(() => {
    dispatch(getGallery(token, galleryId))
  }, [dispatch, token, galleryId])

  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  const handleWorkClick = (index) => {
    setSelectedWorkIndex(index === selectedWorkIndex ? null : index)
  }

  return (
    <div id="gallery" className="mt-20 text-center mb-20">
      <Typography variant="h2" className="text-[#e71b82] mt-20">
        GALLERY__
      </Typography>

      <div className="w-full py-4 px-8 mt-20">
        <CardHeader
          floated={false}
          variant="gradient"
          color="transparent"
          className="grid h-24 m-0 place-items-center"
        >
          <div className="w-full px-20 pt-4 pb-8">
            <Stepper
              activeStep={activeStep}
              lineClassName="bg-white"
              activeLineClassName="bg-[#e71b82]"
            >
              {galleryData.map((gallery, i) => (
                <Step
                  className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                  activeClassName="ring-0 !bg-white text-white"
                  completedClassName="!bg-[#e71b82] text-[#e71b82]"
                  onClick={() => handleStepClick(i)}
                  key={i}
                >
                  <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                    <Typography variant="h6" color="inherit">
                      {gallery[0]}
                    </Typography>
                  </div>
                </Step>
              ))}
            </Stepper>
          </div>
        </CardHeader>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-10 mx-20 mt-10 ">
        {galleryData.map((gallery, i) => (
          <div key={i} className="relative mb-10">
            <img
              src={gallery[1].image}
              alt="artwork"
              className="w-full h-40 rounded-xl cursor-pointer"
              style={{ objectFit: "cover" }}
              onClick={() => handleStepClick(i)}
            />
            {activeStep === i && (
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50"></div>
            )}
            {/* Mostra la didascalia solo se lo step è attivo */}
            {activeStep === i && (
              <div className="absolute left-0 right-0 bottom-0 p-2 bg-white text-blue-gary text-center">
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold" }}
                  className="cursor-pointer"
                  onClick={() => handleWorkClick(i)}
                >
                  {gallery[1].nameWork}
                </Typography>
                <p style={{ fontWeight: "lighter", fontStyle: "italic" }}>
                  {gallery[1].technique}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedWorkIndex !== null && (
        <WorkDetail
          work={galleryData[selectedWorkIndex]}
          onClose={() => setSelectedWorkIndex(null)}
        />
      )}
    </div>
  )
}
export default Gallery
