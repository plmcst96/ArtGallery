import { Typography } from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { removeNotification } from "../redux/actions/notify"

export const CuratorNotify = () => {
  const notifications = JSON.parse(localStorage.getItem("notify"))
  const dispatch = useDispatch()

  return (
    <div className="mt-10">
      {notifications ? (
        <div>
          {" "}
          <Typography variant="h5" className="text-[#e71b82] mb-10">
            NOTIFICATIONS__
          </Typography>
          <ul>
            <li
              className="text-white flex cursor-pointer"
              onClick={() => dispatch(removeNotification(notifications.id))}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="green"
                  className="w-6 h-6 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              {notifications.message}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
