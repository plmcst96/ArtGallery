import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllBlog, getSingleBlog } from "../redux/actions/blog"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { getProfile } from "../redux/actions/user"

const BlogList = () => {
  const blogData = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBlog(token))
    dispatch(getProfile(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mb-20">
      <h2
        className="text-white ml-20"
        style={{ marginTop: "3em", fontSize: "2em", marginBottom: "2em" }}
      >
        BLOGS__
      </h2>
      {blogData.map((blog) => (
        <div key={blog.uuid}>
          <Card className="w-full  lg:max-w-[70rem] max-w-[27rem] md:max-w-[37rem] flex-row bg-transparent ml-20 my-10">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-full"
              style={{ height: "50%" }}
            >
              <img
                src={blog.image[1]}
                alt="card-image"
                className="w-full h-50"
                style={{ objectFit: "cover" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="white" className="mb-2">
                {blog.title}
              </Typography>
              <Typography color="white" className="mb-8 font-normal">
                {blog.description.slice(0, 500)}
              </Typography>
              <p>{blog.date}</p>

              <div className="flex justify-start gap-2 mt-10">
                <Button
                  size="lg"
                  color="white"
                  variant="outlined"
                  className="rounded-full bottone"
                  onClick={() => {
                    dispatch(getSingleBlog(blog.uuid, token))
                    navigate("/blog/detail/" + blog.uuid)
                  }}
                >
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>
          <hr className="mt-10 mx-10" />
        </div>
      ))}
    </div>
  )
}
export default BlogList
