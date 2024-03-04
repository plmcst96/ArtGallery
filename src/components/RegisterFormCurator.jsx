import { CardBody, CardFooter, Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postRegisterCurator } from "../redux/actions/login"

const RegisterFormCurator = () => {
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  })

  const dispatch = useDispatch()

  return (
    <CardBody className=" flex flex-col gap-4">
      <Input
        label="Name"
        size="lg"
        onChange={(e) => {
          setRegister({
            ...register,
            name: e.target.value,
          })
        }}
      />
      <Input
        label="Surname"
        size="lg"
        onChange={(e) => {
          setRegister({
            ...register,
            surname: e.target.value,
          })
        }}
      />
      <Input
        label="Email"
        size="lg"
        className="mb-5 h-0"
        onChange={(e) => {
          setRegister({
            ...register,
            email: e.target.value,
          })
        }}
      />
      <Input
        label="Password"
        size="lg"
        onChange={(e) => {
          setRegister({
            ...register,
            password: e.target.value,
          })
        }}
      />

      <CardFooter className="pt-0 mt-5">
        <Button
          fullWidth
          className="bg-[#e71b82]"
          onClick={(e) => {
            e.preventDefault()
            dispatch(postRegisterCurator(register))
          }}
        >
          Sign Up
        </Button>
      </CardFooter>
    </CardBody>
  )
}
export default RegisterFormCurator
