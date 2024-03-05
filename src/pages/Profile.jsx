import {
  Button,
  Card,
  Typography,
  Input,
  Avatar,
  Dialog,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, postAvatar, putProfile } from "../redux/actions/user"
import { ProfileInfo } from "../components/ProfileInfo"
import { useLocation } from "react-router-dom"

export const Profile = () => {
  const profile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  const [editMode, setEditMode] = useState(false)
  const [editProfile, setEditProfile] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    avatar: "",
  })
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login" // Assuming your login page is at "/login"
  }

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile(token))
    } else {
      setEditProfile(profile)
    }
  }, [dispatch, profile, token])

  const handleEditClick = () => {
    setEditMode(true)
    // Imposta editProfile su profile solo quando si entra in modalità di modifica
    setEditProfile({ ...profile })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(putProfile(editProfile, token))
      alert("modifiche avvenute con successo!")
      // Disabilita la modalità di modifica e resetta l'input
      setEditMode(false)
    } catch (error) {
      console.error("Errore durante la richiesta PUT:", error)
      // Gestire eventuali errori qui
    }
  }

  const handlePicture = async () => {
    try {
      let avatarUrl = editProfile.avatar
      await dispatch(postAvatar(profile?.uuid, token, avatarUrl))
      await dispatch(getProfile(token))
      handleOpen(false)
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error)
      // Gestire l'errore
    }
  }

  return (
    <div className="grid mt-20">
      <div className="gid grid-cols-2 flex flex-row justify-center">
        <div className="flex justify-self-end flex-col">
          <Avatar
            src={
              profile?.avatar === null
                ? "https://docs.material-tailwind.com/img/face-2.jpg"
                : profile?.avatar
            }
            alt="avatar"
            className="mt-20 mr-20 w-40 h-40 cursor-pointer"
            onClick={handleOpen}
          />

          <Dialog open={open} handler={handleOpen} className="p-10">
            <h2
              className="mb-5 text-black uppercase"
              style={{ fontWeight: "bold" }}
            >
              Upload Image__
            </h2>
            <Input
              type="file"
              onChange={(e) =>
                setEditProfile({ ...editProfile, avatar: e.target.files[0] })
              }
            />
            <Button onClick={handlePicture} className="mt-10 rounded-full">
              Save
            </Button>
          </Dialog>
          <Typography
            className="text-[#e71b82] mt-10 ml-10"
            style={{ fontWeight: "bold" }}
          >
            {role}
          </Typography>
          <div>
            {pathname !== "/login" && (
              <Button
                variant="outlined"
                className="bottone text-[#e71b82] border-[#e71b82] hover:bg-white rounded-full mt-10 ml-5"
                onClick={handleLogout}
              >
                LOG OUT
              </Button>
            )}
          </div>
        </div>

        <Card
          color="transparent"
          shadow={false}
          className="mt-20 flex justify-center items-between"
        >
          <Typography variant="h4" color="white" className="uppercase">
            Setting Profile__
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Confirm or modify your profile!
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="gray" className="-mb-3">
                Name
              </Typography>
              <Input
                defaultValue={editProfile.name}
                onChange={(e) =>
                  setEditProfile({ ...editProfile, name: e.target.value })
                }
                readOnly={!editMode}
                variant="standard"
                size="md"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                Surname
              </Typography>
              <Input
                defaultValue={editProfile.surname}
                onChange={(e) =>
                  setEditProfile({ ...editProfile, surname: e.target.value })
                }
                readOnly={!editMode}
                variant="standard"
                size="md"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                Email
              </Typography>
              <Input
                defaultValue={editProfile.email}
                onChange={(e) =>
                  setEditProfile({ ...editProfile, email: e.target.value })
                }
                readOnly={!editMode}
                variant="standard"
                size="md"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                Password
              </Typography>
              <Input
                defaultValue={editProfile.password}
                onChange={(e) =>
                  setEditProfile({ ...editProfile, password: e.target.value })
                }
                readOnly={!editMode}
                variant="standard"
                type="password"
                size="md"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            {editMode ? (
              <Button type="submit" className="mt-6 bg-[#e71b82]" fullWidth>
                Save Changes
              </Button>
            ) : (
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleEditClick()
                }}
                className="mt-6"
                fullWidth
              >
                Edit Profile
              </Button>
            )}
          </form>
          <div className="mr-20 mt-20 w-96">
            <ProfileInfo profile={profile} />
          </div>
        </Card>
      </div>
    </div>
  )
}
