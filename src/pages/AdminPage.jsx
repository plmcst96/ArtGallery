import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { Link } from "react-router-dom"
import { AddAdminResponse } from "../components/AddAdminResponse"

const AdminPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10">
        <Card className="w-full mt-20">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img
              src="https://i.pinimg.com/564x/7b/76/26/7b7626b49badc6d189579c7630e48028.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              style={{ objectPosition: "0 -100px" }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-center">
              <Typography className="font-bold text-[#e71b82]">
                ARTIST__&__WORK
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Click here if you want to modify or add an element!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              <Link to="/admin/artistWork">View content</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full mt-20">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img
              src="https://i.pinimg.com/564x/18/6f/94/186f943d0a33641439535af4a8c6c5a5.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              style={{ objectPosition: "0 -100px" }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-center">
              <Typography className="font-bold text-[#e71b82]">
                BLOG__
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Click here if you want to modify or add an element!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              <Link to="/admin/blog">View content</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full mt-20">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img
              src="https://i.pinimg.com/564x/9d/48/c3/9d48c3a6c367c99b4a8cf01dfa8b34cd.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              style={{ objectPosition: "0 -100px" }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-center">
              <Typography className="font-bold text-[#e71b82]">
                EXHIBITION__
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Click here if you want to modify or add an element!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              View content
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full mt-20">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img
              src="https://i.pinimg.com/564x/86/ca/9d/86ca9d78ba043eac8fce49bfd7908196.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              style={{ objectPosition: "0 -100px" }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-center">
              <Typography className="font-bold text-[#e71b82]">
                EVENT__
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Click here if you want to modify or add an element!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              View content
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Typography
          variant="h3"
          className="text-[#e71b82] uppercase mt-20 mx-10"
        >
          curator request__
        </Typography>
        <div>
          <AddAdminResponse />
        </div>
      </div>
    </div>
  )
}
export default AdminPage
