import SingleComment from "./SingleComment"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getComments } from "../redux/actions/comment"

// eslint-disable-next-line react/prop-types
const CommentList = ({ singleBlog }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const comment = useSelector((state) => state.comment.comments)

  useEffect(() => {
    dispatch(getComments(singleBlog, token))
  }, [dispatch, singleBlog, token])

  return (
    <div className="flex items-center flex-row justify-center gap-5 mb-20">
      <div className="w-full col-span-2">
        {comment.map((comm) => (
          <SingleComment key={comm.uuid} comment={comm} />
        ))}
      </div>
    </div>
  )
}
export default CommentList
