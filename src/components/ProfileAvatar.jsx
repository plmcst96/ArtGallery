import { Avatar, Badge } from "@material-tailwind/react"
import { useSelector } from "react-redux"

import { Link } from "react-router-dom"

export const ProfileAvatar = () => {
  const profile = useSelector((state) => state.profile.profile)
  const role = localStorage.getItem("role")
  const hasNotification = localStorage.getItem("notify")

  return (
    <div
      style={{ width: "52px", height: "36px" }}
      className="inline-flex justify-center item-center mt-2"
    >
      {/* Mostra il badge solo se c'è una notifica */}
      {hasNotification && role === "CURATOR" ? (
        <Badge overlap="circular" placement="bottom-top" color="secondary">
          <Link to="/profile">
            <Avatar
              src={
                profile?.avatar === null
                  ? "https://docs.material-tailwind.com/img/face-2.jpg"
                  : profile?.avatar
              }
              alt="avatar"
              className="w-8 h-8 md:hidden lg:inline-flex"
            />
          </Link>
        </Badge>
      ) : (
        <Link to="/profile">
          <Avatar
            src={
              profile?.avatar === null
                ? "https://docs.material-tailwind.com/img/face-2.jpg"
                : profile?.avatar
            }
            alt="avatar"
            className="w-8 h-8 md:hidden lg:inline-flex"
          />
        </Link>
      )}
      {/* Mostra solo l'avatar senza badge se non ci sono notifiche */}
    </div>
  )
}
