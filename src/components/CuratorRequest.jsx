import { Typography } from "@material-tailwind/react"
import { ArtistRequest } from "./ArtistRequest"
import { WorkRequest } from "./WorkRequest"
import { ExhibitionRequest } from "./ExhibitionRequest"

export const CuratorRequest = () => {
  return (
    <div className="mt-20">
      <div className="mx-10">
        <Typography variant="h3" className="text-[#e71b82]">
          CURATOR__
        </Typography>
        <Typography color="white">
          On this page you can send requests to add an artist or a work of art
          related to an artist. <br /> You can also propose exhibitions to
          publicize your new artist!
        </Typography>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mx-10 gap-10 mt-20">
        <ArtistRequest />
        <WorkRequest />
        <ExhibitionRequest />
      </div>
    </div>
  )
}
