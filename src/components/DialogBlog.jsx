import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllBlog, postBlog, postPictureBlog } from "../redux/actions/blog"

// eslint-disable-next-line react/prop-types
export const DialogBlog = ({ open, handler }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [addBlog, setAddBlog] = useState({
    author: "",
    date: "",
    description: "",
    title: "",
    quote: "",
  })
  const [img, setImg] = useState({
    image: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(postBlog(addBlog, token))
    const blog = localStorage.getItem("blog")
    dispatch(postPictureBlog(blog, token, img.image))
    await dispatch(getAllBlog(token))
    handler()
  }

  return (
    <Dialog
      open={open}
      handler={handler}
      className="overflow-y-auto"
      style={{ height: "75%" }}
    >
      <DialogHeader className="text-[#e71b82] ml-20 mt-5 mb-0">
        ADD NEW BLOG__
      </DialogHeader>
      <DialogBody className="flex justify-center">
        <form
          className="mt-8 mb-2 w-80 max-w-screen-sm sm:w-96 "
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6 justify-center ">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Title
            </Typography>
            <Input
              size="md"
              value={addBlog.title}
              placeholder="title"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setAddBlog({
                  ...addBlog,
                  title: e.target.value,
                })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Author
            </Typography>
            <Input
              type="text"
              size="md"
              value={addBlog.author}
              placeholder="author"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddBlog({
                  ...addBlog,
                  author: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description Blog
            </Typography>
            <Textarea
              type="text"
              size="md"
              value={addBlog.description}
              placeholder="description"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddBlog({
                  ...addBlog,
                  description: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Creation Date
            </Typography>
            <Input
              type="text"
              size="md"
              value={addBlog.date}
              placeholder="date"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddBlog({
                  ...addBlog,
                  date: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Quote
            </Typography>
            <Input
              type="text"
              size="md"
              value={addBlog.quote}
              placeholder="quote"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setAddBlog({
                  ...addBlog,
                  quote: e.target.value,
                })
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Picture Blog
            </Typography>
            <Input
              type="file"
              size="md"
              placeholder="image"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImg({
                    image: e.target.files[0],
                  })
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button
              variant="text"
              onClick={handler}
              className="mr-1 text-[#e71b82]"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="text"
              color="white"
              className="bg-[#e71b82] rounded-full"
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  )
}
