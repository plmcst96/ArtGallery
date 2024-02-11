import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react"
import { useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

const Login = () => {
  const [isLoding, setIsLoding] = useState(true)

  return (
    <div
      className="flex justify-center "
      style={{ marginTop: "15em", marginBottom: "5em" }}
    >
      <Card className=" w-96">
        <div className="flex flex-row justify-center log">
          <CardHeader className="relative w-45">
            <Button
              className=" bottone"
              variant="text"
              onClick={() => {
                setIsLoding(true)
              }}
            >
              LOG IN
            </Button>
            <Button
              className="bottone"
              variant="text"
              onClick={() => {
                setIsLoding(false)
              }}
            >
              SING UP
            </Button>
          </CardHeader>
        </div>
        <CardBody>{isLoding ? <LoginForm /> : <RegisterForm />}</CardBody>
      </Card>
    </div>
  )
}

export default Login
