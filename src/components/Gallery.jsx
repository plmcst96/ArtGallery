import { CardHeader, Step, Stepper, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getGallery } from "../redux/actions/artistWork"

const Gallery = () => {
  const [activeStep, setActiveStep] = useState(0)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const galleryId = useSelector((state) => state.gallery.galleryId)

  useEffect(() => {
    dispatch(getGallery(token, galleryId))
  }, [dispatch, token, galleryId])

  return (
    <div className="mt-20 text-center">
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
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-[#e71b82] text-[#e71b82]"
                onClick={() => setActiveStep(0)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    1900-1920
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-[#e71b82]  text-[#e71b82]"
                onClick={() => setActiveStep(1)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    1930-1940
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-[#e71b82] text-[#e71b82]"
                onClick={() => setActiveStep(2)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    1950-1960
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-[#e71b82] text-[#e71b82]"
                onClick={() => setActiveStep(3)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    1970-1980
                  </Typography>
                </div>
              </Step>
            </Stepper>
          </div>
        </CardHeader>
      </div>
    </div>
  )
}
export default Gallery
