import { Button, CardBody, CardFooter, Input } from "@material-tailwind/react"

const RegisterForm = () => {
  return (
    <CardBody className=" flex flex-col gap-4">
      <Input label="Name" size="lg" />
      <Input label="Surname" size="lg" />
      <Input label="Email" size="lg" className="mb-5 h-0" />
      <Input label="Password" size="lg" />

      <CardFooter className="pt-0 mt-5">
        <Button fullWidth className="bg-[#e71b82]">
          Sign Up
        </Button>
      </CardFooter>
    </CardBody>
  )
}
export default RegisterForm
