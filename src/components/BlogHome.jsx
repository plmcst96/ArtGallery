import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog, getSingleBlog } from "../redux/actions/blog"
import { useNavigate } from "react-router-dom"
import { Typography } from "@material-tailwind/react"

const BlogHome = () => {
  const blogData = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBlog(token))
  }, [])

  return (
    <>
      <Typography
        variant="h4"
        className="text-white ml-20"
        style={{ marginTop: "4em" }}
      >
        BLOGS__
      </Typography>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mx-20 mt-10">
        {blogData
          .map((blog) => (
            <div className="rounded-lg" key={blog.uuid}>
              <img
                src={blog.image[0]}
                alt="blog"
                className="w-full rounded-lg"
                style={{ height: "300px" }}
              />
              <h4
                className="text-white font-bold mt-5 cursor-pointer"
                onClick={() => {
                  dispatch(getSingleBlog(blog.uuid, token))
                  navigate("/blog/detail/" + blog.uuid)
                }}
              >
                {blog.title}
              </h4>
              <p className="text-white font-light mt-4">{blog.date}</p>
            </div>
          ))
          .slice(0, 4)}
      </div>
    </>
  )
}
export default BlogHome
