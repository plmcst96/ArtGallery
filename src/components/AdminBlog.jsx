import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog, removeBlog } from "../redux/actions/blog"
import { DialogBlog } from "./DialogBlog"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const AdminBlog = () => {
  const blogData = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  useEffect(() => {
    dispatch(getAllBlog(token))
  }, [dispatch, token])

  const handleDeleteBlog = (blogId) => {
    toast.warning("Sei sicuro di voler eliminare questo elemento?", {
      autoClose: false,
      closeOnClick: false,
      draggable: true,
      pauseOnHover: true,
      closeButton: true,
      onClose: () => {
        dispatch(removeBlog(blogId, token))
      },
    })
    dispatch(getAllBlog(token))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-10">
      <div className="col-span-4">
        <Typography
          variant="h3"
          className="text-[#e71b82] mt-20 mx-10 flex items-center"
        >
          BLOG__
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#e71b82"
            className="w-8 h-8 ml-10 cursor-pointer"
            onClick={handleOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Typography>
        <DialogBlog open={open} handler={handleOpen} />
        <div className="grid xl:grid-cols-2 grid-cols-1">
          {blogData.map((blog) => (
            <div
              key={blog.uuid}
              className="text-white uppercase mx-10 flex my-5"
            >
              {blog.image && blog.image[0] && (
                <img
                  src={blog.image[0]}
                  alt="list"
                  className="w-20 h-20 mr-5 rounded-full"
                />
              )}
              <div className="grid grid-cols-3 flex justify-between w-full">
                <div className="col-span-2">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {blog.title}
                  </p>
                  <p className="lowercase" style={{ fontSize: "14px" }}>
                    Date: {blog.date}
                  </p>
                  <p className="lowercase" style={{ fontSize: "14px" }}>
                    author: {blog.author}
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
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDeleteBlog(blog.uuid)}
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
      <ToastContainer />
    </div>
  )
}
