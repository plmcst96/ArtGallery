import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer"
import dayjs from "dayjs"
import image from "../assets/barcode copia.png"
import logo from "../assets/wflogo.png"

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginRight: 10,
  },
  barcode: {
    width: 60,
    height: 400,
    marginRight: 20,
    marginLeft: "auto",
  },
})

const PdfTicketEx = () => {
  const ex = JSON.parse(localStorage.getItem("exData"))
  const type = localStorage.getItem("standard")
  const data = localStorage.getItem("ticketDate")
  const time = localStorage.getItem("ticketTime")
  const profile = localStorage.getItem("profile")
  const tot = localStorage.getItem("total")

  return (
    <Document style={{ marginTop: 50 }}>
      <Page size="A5" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Image src={ex.image[0]} style={{ width: 270 }} />
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 10,
              justifyContent: "center",
              marginTop: -110,
              marginLeft: 300,
            }}
          >
            <Image style={styles.logo} src={logo} />
            Relese of WOMEN__FEELS
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#e71b82",
              textTransform: "uppercase",
              marginTop: 80,
              marginBottom: 15,
            }}
          >
            exhibition__
          </Text>
          <Text style={{ fontSize: 24, textTransform: "uppercase" }}>
            {ex.title}
          </Text>
          <Text
            style={{ textTransform: "uppercase", fontSize: 14, marginTop: 10 }}
          >
            {type}
          </Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {dayjs(data).format("ddd, MMM D, YYYY")}
          </Text>
          <Text
            style={{ color: "gray", marginBottom: 8, fontWeight: "normal" }}
          >
            {time}
          </Text>
          <Text
            style={{
              color: "gray",
              marginBottom: 8,
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {profile} <Text> -- {tot},00€ </Text>
          </Text>
        </View>
        <Image style={styles.barcode} src={image} />
      </Page>
    </Document>
  )
}

export default PdfTicketEx
