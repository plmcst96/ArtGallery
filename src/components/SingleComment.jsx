/* eslint-disable react/prop-types */
import { Avatar, Rating } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { deleteComments, putComment } from "../redux/actions/comment"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const SingleComment = ({ comment }) => {
  console.log(comment.uuid)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  const isLoggedIn = !!token && !!role
  const currentUser = useSelector((state) => state.profile.profile)

  const [showModal, setShowModal] = useState(false)
  const [editedText, setEditedText] = useState(comment.text)
  const [editedRating, setEditedRating] = useState(comment.rate)

  const handleDeleteComment = () => {
    // Controlla se l'utente è loggato prima di inviare la richiesta di eliminazione
    if (isLoggedIn) {
      dispatch(deleteComments(comment.uuid, token))
    } else {
      // Gestisci il caso in cui l'utente non sia loggato
      console.log("L'utente non è loggato.")
      // Potresti anche reindirizzare l'utente alla pagina di accesso o mostrare un messaggio di errore.
    }
  }

  const handleSaveEdit = () => {
    if (editedRating >= 0 && editedRating <= 5) {
      const updatedComment = {
        ...comment,
        text: editedText,
        rate: editedRating,
      }
      dispatch(putComment(comment.uuid, updatedComment, token))
      setShowModal(false)
    } else {
      console.log("Il rating deve essere compreso tra 0 e 5.")
    }
  }

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
        {role === "USER" && currentUser.uuid === comment.user.uuid ? (
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
              onClick={handleDeleteComment}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5 ms-5"
              onClick={() => {
                setShowModal(true)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        ) : null}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-l font-semibold">Modify Comment</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Rating
                    value={editedRating}
                    onChange={(e) => setEditedRating(e)}
                  />
                  <textarea
                    className="border rounded-md p-2 w-full h-32"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#e71b82] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="text-[#e71b82] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      setEditedText(comment.text)
                      setEditedRating(comment.rate)
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
export default SingleComment
