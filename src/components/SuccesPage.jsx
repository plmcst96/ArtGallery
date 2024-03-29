import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfTicket from "./PdfTicket"
import { Button, Typography } from "@material-tailwind/react"
import sfondo from "../assets/sfondo.jpeg"
import PdfTicketEx from "./PdfTicketEx"

export const SuccesPage = () => {
  const eventData = JSON.parse(localStorage.getItem("evetData"))
  const clearLocalStorage = () => {
    localStorage.removeItem("evetData")
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${sfondo})`,
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" className="text-[#e71b82]">
        THANK YOU__!
      </Typography>
      <Typography color="white" className="text-center mt-5">
        Now download your ticket for the next event! <br />
        Enjoy our site!
      </Typography>
      <Button
        className="mt-10 bg-[#e71b82] rounded-full"
        style={{ zIndex: "20", marginTop: "90px" }}
        onClick={clearLocalStorage}
      >
        {eventData ? (
          <PDFDownloadLink document={<PdfTicket />} fileName="ticket.pdf">
            {({ loading }) => (loading ? "Generando il PDF..." : "DOWNLOAD ")}
          </PDFDownloadLink>
        ) : (
          <PDFDownloadLink document={<PdfTicketEx />} fileName="ticketEx.pdf">
            {({ loading }) => (loading ? "Generando il PDF..." : "DOWNLOAD ")}
          </PDFDownloadLink>
        )}
      </Button>
    </div>
  )
}
