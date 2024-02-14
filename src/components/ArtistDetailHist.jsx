/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react"
import quote from "../assets/Screenshot 2024-01-28 alle 23.07.20.png"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ArtistDetaillHist = ({ singleArtist }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-20 my-10 mx-20 mb-20">
      <Card className="mt-6 bg-[#EFEFEF]">
        <CardBody className="px-20 py-10">
          <img
            src={quote}
            alt="quote"
            style={{ width: "50px", height: "50px" }}
          />
          <p
            color="blue-gray"
            className="mb-2 grid-cols2"
            style={{ marginLeft: "2.7em" }}
          >
            {singleArtist.quote}
          </p>
          <img
            src={singleArtist.imageArtist}
            alt=""
            className="w-full rounded-xl"
            style={{ objectFit: "cover", objectPosition: "100% 30%" }}
          />
        </CardBody>
      </Card>
      <Card className="mt-6 bg-[#EFEFEF]">
        <CardBody>
          <p
            color="blue-gray"
            className="my-10 font-bold ms-8"
            style={{ fontSize: "16px" }}
          >
            HISTORY
          </p>
          <p
            color="blue-gray"
            className="font-bold ms-8 mb-5s"
            style={{ fontSize: "14px" }}
          >
            {singleArtist.birthDate} | {singleArtist.dieDate}
          </p>
          <Typography style={{ margin: "0 2em" }}>
            {singleArtist.historyArtist.slice(0, 527)}
          </Typography>
        </CardBody>
        <button
          className="flex items-center justify-end gap-2 px-6 py-3 font-sans text-md font-light text-center text-blue-grey align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:text-pink-500 mr-10"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Read More
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
      </Card>
    </div>
  )
}
export default ArtistDetaillHist
