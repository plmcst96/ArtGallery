import { Avatar, Button, Input, Rating } from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getComments, postComment } from "../redux/actions/comment"

// eslint-disable-next-line react/prop-types
const AddComment = ({ singleBlog }) => {
  const user = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [rated, setRated] = useState(0)
  const [addComment, setAddComment] = useState({
    rate: "",
    text: "",
    blog: singleBlog,
    user: user.uuid,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(postComment(addComment, token))

    setAddComment({
      rate: "",
      text: "",
      blog: singleBlog,
      user: user.uuid,
    })

    dispatch(getComments(singleBlog, token))
  }

  return (
    <>
      <div className="flex items-center flex-row justify-center grid grid-cols-4 gap-5 mt-10">
        <div className=" text-end">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
        </div>
        <div className="w-full col-span-2 mt-10">
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 font-bold text-blue-gray-500 mb-5">
              <Rating
                value={0}
                onChange={(value) => {
                  setAddComment({
                    ...addComment,
                    rate: value,
                  })
                  setRated(value)
                }}
              />
              {rated}
            </div>
            <Input
              type="text"
              size="md"
              value={addComment.text}
              placeholder="Leave a comment"
              className=" !border-t-white focus:!border-white text-white"
              style={{ borderRadius: "25px" }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setAddComment({
                  ...addComment,
                  text: e.target.value,
                })
              }
            />
            <div className="flex flex-row justify-end col-span-3 mt-10">
              <Button
                type="submit"
                variant="filled"
                className="bg-[#e71b82] text-white rounded-full"
              >
                POST
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddComment
