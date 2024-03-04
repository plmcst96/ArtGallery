/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react"

// eslint-disable-next-line react/prop-types
const WorkDetails = ({ work, onClose }) => {
  return (
    <div className="mt-20 mx-20 grid grid-cols-3 gap-20">
      <div className="w-full">
        <img
          src={work[1].image}
          alt="image"
          className="w-full"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="col-span-2">
        <div className="flex justify-between">
          <Typography variant="h4" className="text-[#e71b82]">
            {work[1].nameWork}
            <span
              className="text-white ms-5"
              style={{
                fontSize: "16px",
                fontWeight: "lighter",
                fontStyle: "italic",
              }}
            >
              {" | " + work[1].technique}
            </span>
          </Typography>

          <button onClick={onClose} className="text-white">
            Close
          </button>
        </div>
        <Typography variant="body1" className="text-white mt-10 text-start">
          {work[1].description}
        </Typography>
      </div>
    </div>
  )
}

export default WorkDetails
