import {
  Navbar,
  Typography,
  Button,
  Collapse,
  Drawer,
  Input,
  Textarea,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import FavouriteIndicatore from "./FavouriteIndicator"
import { ProfileAvatar } from "./ProfileAvatar"

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [open, setOpen] = useState(false)
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)
  const role = localStorage.getItem("role")

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-1 lg:flex-row lg:items-left lg:gap-6 menu">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium cursor-pointer"
        type="button"
      >
        <Link to="/artist" className="flex items-center">
          Artist
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        <Link to="/blog" className="flex items-center">
          Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        <Link to="/exhibitions" className="flex items-center">
          Exhibition
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        <Link to="/events" className="flex items-center">
          Event
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal cursor-pointer"
        onClick={openDrawer}
      >
        Work
      </Typography>
      {role === "ADMIN" ? (
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal cursor-pointer"
        >
          <Link to="/admin">| Admin</Link>
        </Typography>
      ) : null}

      {role === "CURATOR" ? (
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal cursor-pointer"
        >
          <Link to="/curator">| Curator</Link>
        </Typography>
      ) : null}
    </ul>
  )

  const [emailContent, setEmailContent] = useState({
    name: "",
    surname: "",
    email: "",
    descriptionRole: "",
  })

  const formData = {
    name: emailContent.name,
    surname: emailContent.surname,
    email: emailContent.email,
    descriptionRole: emailContent.descriptionRole,
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Invia l'email

    emailjs
      .send("service_art_gallerys", "email_curator", formData, {
        publicKey: "ShSV0UuatuQKO5UNM",
      })
      .then(
        () => {
          toast.success("email send with success")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )

    // Chiudi il drawer
    closeDrawer()
    // Resetta il contenuto del form
    setEmailContent({
      name: "",
      surname: "",
      email: "",
      descriptionRole: "",
    })
  }

  return (
    <div className=" overflow-scroll">
      <Drawer open={open} onClose={closeDrawer} className="bg-[#04060a]">
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography
            variant="h5"
            color="white"
            className="font-bold"
            style={{ marginTop: "6em" }}
          >
            Contact Us
          </Typography>
          <Button variant="text" color="white" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="white" className="font-normal ">
            Write the message and then click button.
          </Typography>
        </div>
        <form className="flex flex-col gap-6 p-4" onSubmit={handleFormSubmit}>
          <Typography variant="h6" className="mb-3 text-[#e71b82]">
            Work whit Us
          </Typography>
          <Input
            label="Name"
            color="white"
            variant="standard"
            placeholder="Name"
            value={emailContent.name}
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                name: e.target.value,
              })
            }}
          />

          <Input
            label="Surname"
            color="white"
            variant="standard"
            placeholder="Surname"
            value={emailContent.surname}
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                surname: e.target.value,
              })
            }}
          />
          <Input
            type="email"
            label="Email"
            color="white"
            variant="standard"
            placeholder="Email"
            value={emailContent.email}
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                email: e.target.value,
              })
            }}
          />
          <Textarea
            rows={6}
            variant="standard"
            label="Message"
            className="mb-5"
            value={emailContent.descriptionRole}
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                descriptionRole: e.target.value,
              })
            }}
          />
          <Button type="submit" className="bg-[#e71b82]">
            Send Message
          </Button>
        </form>
      </Drawer>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2 bg-[#04060a] border-none">
        <div className="flex items-left justify-between text-white-900">
          <Typography
            as="a"
            className="mr-4 ml-6 cursor-pointer py-1.5 font-bold lg:ml-20 h1"
          >
            <Link to="/">WOMEN__FEELS</Link>
          </Typography>
          <div className="mx-20 hidden lg:block items-center">{navList}</div>

          <div className=" lg:mr-10">
            {role === "USER" ? <FavouriteIndicatore /> : null}
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-5 h-5 hover:stroke-pink-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-5 h-5 hover:stroke-pink-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </Button>
            <ProfileAvatar />
          </div>
          <Button
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1 mt-5">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="text-[#e71b82]"
            >
              <span>Search</span>
            </Button>
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="text-[#e71b82]"
            >
              <Link to="/login">Log in</Link>
            </Button>
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="text-[#e71b82]"
            >
              <Link to="/profile">Profile</Link>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar
