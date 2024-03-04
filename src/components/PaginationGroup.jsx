import { ButtonGroup, IconButton } from "@material-tailwind/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function PaginationGroup({ totalItems }) {
  const [active, setActive] = useState(1)

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(totalItems / 10) // 10 è il numero predefinito di elementi per pagina

  const getItemProps = (index) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  })

  const next = () => {
    if (active === totalPages) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  // Genera i pulsanti delle pagine in base al numero totale di pagine
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <IconButton key={i} {...getItemProps(i)}>
        {i}
      </IconButton>
    )
  }

  return (
    <ButtonGroup variant="outlined">
      <IconButton onClick={prev}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      {pages} {/* Pulsanti delle pagine */}
      <IconButton onClick={next}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  )
}
