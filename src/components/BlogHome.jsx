import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog } from "../redux/actions/blog"

const BlogHome = () => {
  const blogData = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(getAllBlog(token))
  }, [])

  return (
    <>
      <h2 className="text-white ml-20" style={{ marginTop: "4em" }}>
        BLOGS__
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mx-20">
        {blogData
          .map((blog) => (
            <div className="lg:col-span-2 rounded-lg" key={blog.uuid}>
              <img
                src={blog.image[0]}
                alt="blog"
                className="w-full rounded-lg"
                style={{ height: "300px" }}
              />
              <h4 className="text-white font-bold mt-5">{blog.title}</h4>
              <p className="text-white font-light mt-4">{blog.date}</p>
            </div>
          ))
          .slice(0, 2)}
      </div>
    </>
  )
}
export default BlogHome
