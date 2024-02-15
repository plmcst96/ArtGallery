import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleBlog } from "../redux/actions/blog"
import { Button, Typography } from "@material-tailwind/react"

import ArtistHome from "./ArtistHome"

const BlogDetail = () => {
  const singleBlog = useSelector((state) => state.blog.singleBlog)
  const dispatch = useDispatch()
  const { uuid } = useParams()
  const token = localStorage.getItem("token")

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
      </div>
      <ArtistHome />
    </>
  )
}
export default BlogDetail
