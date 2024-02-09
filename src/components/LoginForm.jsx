import {
  Button,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react"

const LoginForm = () => {
  return (
    <CardBody className=" flex flex-col gap-4">
      <Input label="Email" size="lg" />
      <Input label="Password" size="lg" />
      <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div>

      <CardFooter className="pt-0">
        <Button fullWidth className="bg-[#e71b82]">
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
