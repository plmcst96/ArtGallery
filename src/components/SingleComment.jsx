/* eslint-disable react/prop-types */
import { Avatar, Rating } from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { deleteComments } from "../redux/actions/comment"

// eslint-disable-next-line react/prop-types
const SingleComment = ({ comment }) => {
  console.log(comment.uuid)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  return (
    <div
      className="flex items-center flex-row justify-center col-span-2 gap-5 mt-10"
      style={{ marginLeft: "10em", width: "150%" }}
    >
      <div className="mt-20 text-end">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
      </div>
      <div className="w-full col-span-2 mt-10 grid grid-cols-2">
        <div className="flex gap-2 font-bold text-blue-gray-500 mb-5 flex-col">
          {comment.rate && (
            <div>
              <Rating value={comment.rate} />
              {comment.rate}
            </div>
          )}
          {comment.text && (
            <div className="col-span-2">
              <p className="text-white" style={{ fontWeight: "normal" }}>
                {comment.text}
              </p>
            </div>
          )}
        </div>
        <div onClick={() => dispatch(deleteComments(comment.uuid, token))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default SingleComment
