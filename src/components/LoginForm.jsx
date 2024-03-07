import {
  Button,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { postLogin } from "../redux/actions/login"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    setLogin({
      ...login,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardBody className=" flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        size="lg"
        onChange={(e) => {
          setLogin({
            ...login,
            email: e.target.value,
          })
        }}
      />

      <Input
        label="Password"
        type="password"
        size="lg"
        onChange={(e) => {
          setLogin({
            ...login,
            password: e.target.value,
          })
        }}
      />
      <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div>

      <CardFooter className="pt-0">
        <Button
          fullWidth
          className="bg-[#e71b82]"
          onClick={(e) => {
            e.preventDefault()
            dispatch(postLogin(login))

            navigate("/")
          }}
        >
          Log In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Forgot password?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Reset Password
          </Typography>
        </Typography>
      </CardFooter>
    </CardBody>
  )
}
export default LoginForm
