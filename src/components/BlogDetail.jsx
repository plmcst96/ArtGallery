import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleBlog } from "../redux/actions/blog"
import { Button, Typography } from "@material-tailwind/react"

import ArtistHome from "./ArtistHome"
import CommentArea from "./CommentArea"
import { addFavouriteAction } from "../redux/actions/favourite"

const BlogDetail = () => {
  const singleBlog = useSelector((state) => state.blog.singleBlog)
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  useEffect(() => {
    if (!singleBlog) {
      dispatch(getSingleBlog(uuid, token))
    }
  }, [token, dispatch, uuid, singleBlog])

  if (!singleBlog) {
    return (
      <Button variant="text" loading={true}>
        Loading
      </Button>
    )
  }
  const handleAddToFavourite = () => {
    console.log("Add to Favourite button clicked") // Verifica se il pulsante viene cliccato
    dispatch(addFavouriteAction(singleBlog))
  }

  return (
    <>
      {" "}
      <div
        className="flex flex-col justify-between items-center"
        style={{ marginTop: "10em" }}
      >
        <div>
          <Typography variant="h2" className="text-white uppercase ">
            {singleBlog.title + "__"}
            {role === "USER" ? (
              <Button
                className="text-white flex"
                variant="text"
                style={{ marginLeft: "350px" }}
                onClick={handleAddToFavourite}
              >
                Add to Favourite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#e71b82"
                  className="w-6 h-6 ml-5"
                  onClick={handleAddToFavourite}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Button>
            ) : null}
          </Typography>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src={singleBlog.image[0]}
            alt="blog"
            style={{ borderRadius: "30px", marginTop: "3em" }}
            className="w-full"
          />
        </div>
        <div className="mt-10" style={{ width: "55%" }}>
          <p className="text-white">{singleBlog.description.slice(0, 683)}</p>
        </div>
        <div
          className=" mt-10 p-10 text-white font-light"
          style={{
            width: "35%",
            borderLeft: "3px solid  #e71b82",
            fontStyle: "italic",
          }}
        >
          {singleBlog.quote}
        </div>

        <div className=" mt-10" style={{ width: "55%" }}>
          <p className="text-white">
            {singleBlog.description.slice(683, 1200)}
          </p>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src={singleBlog.image[1]}
            alt="image event"
            style={{
              borderRadius: "30px",
            }}
            className="w-full mt-10"
          />
        </div>

        <div className=" mt-10" style={{ width: "55%" }}>
          <p className="text-white">{singleBlog.description.slice(1200)}</p>
        </div>
        <div className=" mt-10" style={{ width: "55%" }}>
          <CommentArea singleBlog={singleBlog.uuid} />
        </div>
      </div>
      <ArtistHome />
    </>
  )
}
export default BlogDetail
