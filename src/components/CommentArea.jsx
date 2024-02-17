import { Typography } from "@material-tailwind/react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

// eslint-disable-next-line react/prop-types
const CommentArea = ({ singleBlog }) => {
  return (
    <div>
      <hr className="mt-10" />
      <div className="mt-5">
        <Typography variant="h4" color="white">
          LEAVE COMMENT__
        </Typography>
      </div>
      <AddComment singleBlog={singleBlog} />
      <CommentList singleBlog={singleBlog} />
    </div>
  )
}
export default CommentArea
